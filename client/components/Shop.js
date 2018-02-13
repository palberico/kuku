// React
import React, { Component } from 'react';

// Styles
import { Text, View, Image, Dimensions } from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  DeckSwiper,
  Badge,
} from 'native-base';

// React Router
import { Link } from 'react-router-native';

// Redux
import { connect } from 'react-redux';
import { addToCart } from '../actions/products';

// API Calls
import axios from 'axios';
import CardComp from './Card';

// Components
import Nav from './Nav';
import Loader from './Loader';

class Shop extends Component {
  state = { loaded: false, products: []  }

  componentDidMount = async () => {
    axios.get('/products')
      .then( res => {
        let filtered = res.data.filter( item => {
           return item !== null
        })
        this.setState({ loaded: true, products: filtered })
      }
    )
  }

  openSettings = () => {
    this.props.history.push('/settings')
  }

  openCart = () => {
    this.props.history.push('/cart/shop')
  }

  openSearch = () => {
    this.props.history.push('/search')
  }

  leftAlert = async (cardObject) => {
    await axios.post( 'https://kukudb-ff7f7.firebaseio.com/dislike.json', cardObject )
    await axios.delete(`https://kukudb-ff7f7.firebaseio.com/unseen_items/${cardObject['Id']}.json`)
  }

  sendToCart = async (cardObject) => {
    await axios.post( 'https://kukudb-ff7f7.firebaseio.com/cart.json', cardObject )
    await axios.delete(`https://kukudb-ff7f7.firebaseio.com/unseen_items/${cardObject['Id']}.json`)
    this.props.dispatch(addToCart())
  }

  emptyShop = () => {
    return(
      <View>
        <Link to="/search">
            <Text style={styles.textEmptyDeck}>
              "I'm all out of love, I'm so lost without you."
            </Text>
          </Link>
      </View>
    )
  }

  render() {
    if (this.state.loaded) {
      return (
        <Container style={styles.content}>
          <Nav />
          <Content scrollEnabled={false} style={styles.shop}>
            <View>
              <DeckSwiper
                ref={(swiper) => this.swiper = swiper}
                dataSource={this.state.products}
                onSwipeLeft={this.leftAlert}
                onSwipeRight={this.sendToCart}
                renderEmpty={this.emptyShop}
                looping={false}
                renderItem={item =>
                  <CardComp item={item} history={this.props.history} />
                }
              />
            </View>
          </Content>
          <Footer>
            <FooterTab style={styles.footer}>
              <Button vertical onPress={this.openSettings}>
                <Icon name='ios-settings-outline' />
                <Text>Settings</Text>
              </Button>
              <Button vertical onPress={this.openSearch}>
                <Icon name='ios-search-outline' />
                <Text>Categories</Text>
              </Button>
              <Button badge vertical onPress={this.openCart}>
                <Badge><Text style={{color: 'white'}}>{this.props.cart}</Text></Badge>
                <Icon name='md-heart-outline' />
                <Text>Loved</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      )
    } else {
      return (
        <View style={styles.shop}>
          <Loader />
        </View>
      )
    }
  }
};

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

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
  textEmptyDeck:{
    flex: 1,
    marginTop: '50%',
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
};

export default connect(mapStateToProps)(Shop);
