import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import axios from 'axios';
import CardComp from './Card';
import Nav from './Nav';
import Loader from './Loader';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  DeckSwiper,
} from 'native-base';
import { fetchUnseen } from '../actions/products';

class Shop extends Component {

  state = { loaded: false, unseenItems: [] }

  componentDidMount = async () => {
    axios.get('https://kukudb-ff7f7.firebaseio.com/unseen_items.json')
      .then( res => {
        this.setState({ loaded: true, unseenItems: res.data })
      })
    }

  openSettings = () => {
    this.props.history.push('/settings')
  }

  openCart = () => {
    this.props.history.push('/cart')
  }

  leftAlert = async (cardObject) => {
    await axios.post('https://kukudb-ff7f7.firebaseio.com/dislike.json', cardObject )
  }

  sendToCart = async (cardObject) => {
    await axios.post('https://kukudb-ff7f7.firebaseio.com/cart.json', cardObject )
  }

  emptyShop = () => {
    return(
      <View>
        <Text style={{color: black}}>
          Deck is Empty!
        </Text>
      </View>
    )
  }

  render(){
    if(this.state.loaded){
      return(
        <Container style={styles.content}>
          <Nav />
          <Content scrollEnabled={false} style={styles.shop}>
            <View>
              <DeckSwiper
                ref={(swiper) => this.swiper = swiper}
                dataSource={this.state.unseenItems}
                onSwipeLeft={this.leftAlert}
                onSwipeRight={this.sendToCart}
                renderEmpty={this.emptyShop}
                looping={false}
                renderItem={item =>
                <CardComp item={item} history={this.props.history} />
              }/>
            </View>
          </Content>
          <Footer>
            <FooterTab style={styles.footer}>
              <Button vertical onPress={this.openSettings}>
                <Icon name='ios-settings-outline' />
                <Text>Settings</Text>
              </Button>
              <Button vertical onPress={this.openDescription}>
                <Icon name='ios-search-outline' />
                <Text>Search</Text>
              </Button>
              <Button vertical onPress={this.openCart}>
                <Icon name='md-heart-outline' />
                <Text>Loved</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      )
    }
    else{
      return(
        <View style={styles.shop}>
          <Loader />
        </View>
      )
    }

  }
}

const deviceY = Dimensions.get('window').height
const deviceX = Dimensions.get('window').width

let styles = {
  deckStyle: {
    flex: 1,
  },
  shop: {
    flex: 1,
    paddingTop: '8.5%',
    width: deviceX,
    height: deviceY,

  },
  content:{
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  footer:{
    backgroundColor: '#ffffff'
  },
}

export default Shop;
