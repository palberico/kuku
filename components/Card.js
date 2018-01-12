import React, { Component } from 'react'
import Modal from 'react-native-modalbox';
import { Text, View, Image, TouchableHighlight, Dimensions } from 'react-native'
import {
  Body,
  Left,
  Right,
  Title,
  Button,
  Icon,
  CardItem,
  Thumbnail,
  DeckSwiper,
  Card,
  Container,
} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Nav from './Nav'

const deviceY = Dimensions.get('window').height
const deviceX = Dimensions.get('window').width

class CardComp extends Component {

  state = { liked: false, disliked: false }

  changeLike = () => {
    this.setState({liked: !this.state.liked})
  }

  changeDislike = () => {
    this.setState({disliked: !this.state.disliked})
    this.refs.modal1.close()
  }


  render(){
    return(
        <View>
          <TouchableHighlight onPress={() => this.refs.modal1.open()} >
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={this.props.item.logo} />
                  <Body>
                    <Text>{this.props.item.text}</Text>
                    <Text note>{this.props.item.price}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
              <Body>
                <Image
                  style={styles.cardImage}
                  source={this.props.item.image}

                 />
              </Body>
              </CardItem>
              <CardItem footer>
            </CardItem>

            </Card>
          </TouchableHighlight>
          <Modal ref={'modal1'} position={'center'} style={styles.modal}>
            <Text style={styles.desc}>
              {this.props.item.description}
            </Text>
            <Grid>
              <Row>
                <Col>
                  <Button iconLeft transparent style={styles.cartBtn} onPress={this.changeDislike}>
                    <Icon
                      style={styles.iconBtn}
                      name={this.state.disliked ? 'ios-close-circle' : 'ios-close-circle-outline'} />
                    <Text style={styles.textBtn}>NOPE</Text>
                  </Button>
                  </Col>
                  <Col>
                  <Button iconLeft transparent style={styles.cartBtn} onPress={this.changeLike}>
                    <Icon
                      style={styles.iconBtn}
                      name={this.state.liked ? 'ios-heart' : 'heart'}
                    />
                    <Text style={styles.textBtn}>LOVE</Text>
                  </Button>
                </Col>
              </Row>
            </Grid>
          </Modal>
        </View>
      )
    }
  }

  const styles = {
      cardImage:{
        width: deviceX,
        height: deviceY/ 2,
        resizeMode: 'contain',
      },
      modal:{
        height: 300,
        width: 300,
        borderRadius: 10
      },
      desc:{
        marginLeft: 20,
        marginTop: 35,
        marginRight: 20
      },
      cartBtn:{
        top: 100,
        left: 25,
        width: 100
      },
      textBtn:{
        marginLeft: 10,
        marginRight: 50,
        color: 'red'
      },
      iconBtn:{
        color: 'red'
      },
    }
export default CardComp
