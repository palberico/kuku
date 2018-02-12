import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import Nav from './Nav';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  View,
  Body,
  Left,
  Icon,
  Footer,
  FooterTab,
  Badge,
} from 'native-base';

class Search extends Component {

  openShop = () => {
    this.props.history.push('/shop')
  }

  openCart = () => {
    this.props.history.push('/cart/shop')
  }

  openCustom = (category) => {
    this.props.history.push(`/custom/${category}`)
  }

  openSettings = () => {
    this.props.history.push('/settings')
  }

  logOut = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <Container>
        <Header style={styles.content}>
          <Left>
            <Icon name='ios-arrow-back' style={styles.icon} onPress={this.logOut} />
          </Left>
        </Header>
      <Content style={styles.content}>
        <View>
          <Link to="/shop">
            <Card>
              <CardItem cardBody>
                <Image source={require('../images/home/tshirt3.jpg')}
                  style={{height: 200, width: null, flex: 1}}/>
                <View style={styles.kukuWrap}>
                  <Text style={styles.kukuText}>Go Kuku</Text>
                </View>
              </CardItem>
              </Card>
            </Link>
            <Link to="/custom/Womens">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/womens.jpg')} 
                    style={{height: 200, width: null, flex: 1}}/>
                  <View style={styles.kukuWrap}>
                    <Text style={styles.kukuText}>Women's Kart</Text>
                  </View>
                </CardItem>
              </Card>
            </Link>
            <Link to="/custom/Baby">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/baby.jpg')} 
                    style={{height: 200, width: null, flex: 1}}/>
                  <View style={styles.kukuWrap}>
                    <Text style={styles.kukuText}>Baby Kart</Text>
                  </View>
                </CardItem>
              </Card>
            </Link>
            <Link to="custom/Mens">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/mens.jpg')} 
                    style={{height: 200, width: null, flex: 1}}/>
                  <View style={styles.kukuWrap}>
                    <Text style={styles.kukuText}>Men's Kart</Text>
                  </View>
                </CardItem>
              </Card>
            </Link>
            <Link to="/custom/Accessories">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/accessories.jpg')} 
                    style={{height: 200, width: null, flex: 1}}/>
                  <View style={styles.kukuWrap}>
                    <Text style={styles.kukuText}>Accessory Kart</Text>
                  </View>
                </CardItem>
            </Card>
          </Link>
          </View>
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button vertical onPress={this.openSettings}>
              <Icon style={styles.icon} name='ios-settings-outline' />
              <Text style={styles.iconText}>Settings</Text>
            </Button>
            <Button badge vertical onPress={this.openCart}>
              <Badge><Text style={{color: 'white'}}>{this.props.cart}</Text></Badge>
              <Icon style={styles.icon} name='md-heart-outline' />
              <Text style={styles.iconText}>Loved</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
};

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

const styles = {
  content:{
    backgroundColor: 'black'
  },
  cardImage:{
    resizeMode: 'contain',
  },
  textBtn1:{
    fontSize: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'white',
  },
  icon:{
    color: 'white'
  },
  iconText: {
    color: 'white'
  },
  kukuWrap: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: '65%'
  },
  footer:{
    backgroundColor: '#000'
  },
  kukuText: {
    paddingLeft: 10,
    fontSize: 25,
    color: 'white',
  },
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
};

export default connect(mapStateToProps)(Search);
