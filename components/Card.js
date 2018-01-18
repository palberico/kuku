import React, { Component } from 'react'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Text, View, Image, TouchableHighlight, Dimensions } from 'react-native'
import Nav from './Nav'
import DescriptionModal from './DescriptionModal'
import {
  Body,
  Left,
  CardItem,
  Thumbnail,
  Card,
  Footer,
} from 'native-base'

class CardComp extends Component {

  state = { modalOpen: false }

  modalToggleFn = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  render(){
    return(
        <View>
          <TouchableHighlight onPress={this.modalToggleFn} >
            <Card>
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
              <Footer style={styles.cardFooter} />
            </Card>
          </TouchableHighlight>
          <DescriptionModal
            modalState={this.state.modalOpen}
            item={this.props.item}
           />
        </View>
      )
    }
  }

const deviceY = Dimensions.get('window').height
const deviceX = Dimensions.get('window').width
const styles = {
  cardImage:{
    width: deviceX,
    height: deviceY/ 2,
    resizeMode: 'contain',
  },
  cardFooter:{
    width: 10,
    backgroundColor: '#ffffff',
  },
}

export default CardComp
