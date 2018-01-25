import React, { Component } from 'react';
import { View, Text, Platform, Dimensions, Image, Linking } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Nav from './Nav';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import { addToCart } from '../actions/products';
import axios from 'axios';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Card,
  CardItem,
  Badge
} from 'native-base';

class Description extends Component {
  state = { position: 1, interval: null, liked: false  };

  changeLike = async () => {
    await axios.post( 'https://kukudb-ff7f7.firebaseio.com/cart.json', this.props.product )
    await axios.delete(`https://kukudb-ff7f7.firebaseio.com/unseen_items/${this.props.product['Id']}.json`)
    this.setState({liked: !this.state.liked})
    this.props.dispatch(addToCart())
  }

  return = () => {
    if (this.props.match.params.category === "kuku"){
      this.props.history.push('/shop')
    } else {
      this.props.history.push(`/custom/${this.props.match.params.category}`)
    }
  }

  goToCart = () => {
    this.props.history.push(`/cart/${this.props.product['Handle']}`)
  }

  websiteLink = () => {
    Linking.canOpenURL(this.props.product['link']).then(supported => {
      if (!supported) {
        console.log('Can\‘t handle url: ' + this.props.product['link']);
      } else {
        return Linking.openURL(this.props.product['link']);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    const { product } = this.props;

    return (
      <Container>
        <Nav />
        <Content>
          <View style={styles.container}>
            <ImageSlider
              images={[
                product['Image Src'],
                product['Alt1']
              ]}
              height={deviceY/ 1.5}
              position={this.state.position}
              onPositionChanged={position => this.setState({position})}
            />
          </View>
          <Card style={styles.card}>
            <Grid>
              <Row>
                <Col>
                  <Button block dark style={styles.btnOne} onPress={this.websiteLink}>
                    <Text style={styles.textBtn1}>Buy from Retailer</Text>
                  </Button>
                </Col>
                <Col>
                  <Button iconLeft block dark style={styles.btnTwo} onPress={this.changeLike}>
                    <Icon style={styles.iconBtn}
                          name={this.state.liked ? 'ios-heart' : 'heart'}
                    />
                    <Text style={styles.textBtn2}>Love It</Text>
                  </Button>
                </Col>
              </Row>
            </Grid>
            <CardItem header>
              <Left>
                <Body>
                  <Text style={styles.name}>{product['Vendor']}</Text>
                  <Text note>{product['Title']}</Text>
                  <Text note>{product['Variant Price']}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.desc}>{product['Body']}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.web}>{product['address']}</Text>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button vertical onPress={this.return} >
              <Icon name='ios-pricetags-outline' />
              <Text>Shop</Text>
            </Button>
            <Button badge vertical onPress={this.goToCart}>
              <Badge><Text style={{color: 'white'}}>{this.props.cart}</Text></Badge>
              <Icon name='md-heart-outline' />
              <Text>Loved</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
};

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

const styles = {
  imageStyle:{
    width: deviceX,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 25,
    marginTop: 10,
  },
  nameNote: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 16,
  },
  desc: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 16,
    marginLeft: '2%',
  },
  web: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 15,
    marginLeft: '2%'
  },
  btnOne:{
    flex: 1,
    width: deviceX/2.2,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20
  },
  btnTwo:{
    flex: 1,
    width: deviceX/2.2,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20
  },
  textBtn1:{
    fontSize: 18,
    color: 'white'
  },
  textBtn2:{
    fontSize: 18,
    color: 'white'
  },
  iconBtn:{
    marginRight: 20,
    color: 'white'
  },
  card: {
    marginTop: 5,
  },
};

const mapStateToProps = (state, props) => {
  return {
    product: state.products.products.find( p => p['Title'] === props.match.params.title),
    cart: state.cart
  }
};

export default connect(mapStateToProps)(Description);