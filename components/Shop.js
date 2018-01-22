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
import { fetchProducts } from '../actions/products';

class Shop extends Component {

  state = { selected: {}, loaded: false }

  componentDidMount = async () => {
    await this.props.dispatch(fetchProducts())
    this.setState({ loaded: true })
  }

  openDescription = () => {
    // TODO figure out how to pass 'Handle' up to shop to then send to description
    // this.props.history.push('/description')
    // note** this is going to suck
  }

  openSettings = () => {
    this.props.history.push('/settings')
  }

  openCart = () => {
    this.props.history.push('/cart')
  }

  leftAlert = (cardObject) => {
    this.setState({selected: cardObject})
  }

  sendToCart = (cardObject) => {
    this.setState({selected: cardObject})
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
                dataSource={this.props.products}
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
    products: state.products.products,
    selected: state.products.selected
  }
}

export default connect(mapStateToProps)(Shop);
