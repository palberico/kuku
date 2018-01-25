import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import Loader from './Loader';
import axios from 'axios'
import { connect } from 'react-redux';
import { addToCart } from '../actions/products';
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
import Nav from './Nav';
import CardComp from './Card';

class Custom extends Component {
  state = { loaded: false, products: [] }

  componentDidMount = async () => {
    axios.get('https://kukudb-ff7f7.firebaseio.com/unseen_items.json')
      .then( res => {
        let filtered = res.data.filter( item => {
           return item !== null
        })
        let categoryArray = filtered.filter( item => {
          return item['Handle'] === this.props.match.params.category
        })
        this.setState({ loaded: true, products: categoryArray })
      }
    )
  }

  openSettings = () => {
    this.props.history.push('/settings')
  }

  openCart = () => {
    this.props.history.push(`/cart/${this.props.match.params.category}`)
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
        <Text style={styles.textEmptyDeck}>
        "I'm all out of love, I'm so lost without you."
        </Text>
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
                  <CardComp item={item} history={this.props.history} category={this.props.match.params.category} />
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

export default connect(mapStateToProps)(Custom);