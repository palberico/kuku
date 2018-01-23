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
import { connect } from 'react-redux';
import { fetchUnseen } from '../actions/products';

class Shop extends Component {

  state = { loaded: false }

  componentDidMount = async () => {
    await this.props.dispatch(fetchUnseen())
    this.setState({ loaded: true })
  }

  openSettings = () => {
    this.props.history.push('/settings')
  }

  openCart = () => {
    this.props.history.push('/cart')
  }

  leftAlert = (cardObject) => {
    console.log(Object.keys(cardObject))
    // axios.get('https://kukudb-ff7f7.firebaseio.com/dislike.json')
    //   .then( res => {
    //     res.data === null ?
    //     axios.put('https://kukudb-ff7f7.firebaseio.com/dislike.json', cardObject ) :
    //     axios.post('https://kukudb-ff7f7.firebaseio.com/dislike.json', cardObject )
      // })
  }

  sendToCart = (cardObject) => {
    axios.get('https://kukudb-ff7f7.firebaseio.com/cart.json')
      .then( res => {
        res.data === null ?
        axios.post('https://kukudb-ff7f7.firebaseio.com/cart.json', cardObject ) :
        axios.post('https://kukudb-ff7f7.firebaseio.com/cart.json', cardObject )
      })
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
                dataSource={this.props.unseen}
                onSwipeLeft={this.leftAlert}
                onSwipeRight={this.sendToCart}
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

const mapStateToProps = (state) => {
  return {
    unseen: state.products.unseen_products
  }
}

export default connect(mapStateToProps)(Shop);
