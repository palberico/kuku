import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import axios from 'axios';
import DummyData from './DummyData';
import CardComp from './Card';
import Nav from './Nav';
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

  state = { products: [], loaded: false }

  componentDidMount = async () => {
    await this.props.dispatch(fetchProducts())
    this.setState({ loaded: true })
  }

  openDescription = () => {
  this.props.history.push('/description')
  }

  openSettings = () => {
    this.props.history.push('/settings')
    }

  openCart = () => {
    this.props.history.push('/cart')
    }

  render(){
    if(this.state.loaded){
      return(
       <Container style={styles.content}>
         <Nav />
          <Content scrollEnabled={false}>
            <View style={styles.shop}>
              <DeckSwiper
                ref={(c) => this._deckSwiper = c}
                dataSource={this.props.products}
                onSwipeLeft={this.leftAlert}
                onSwipeRight={this.rightAlert}
                renderItem={item =>
                <CardComp item={item} />
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
                   <Icon name='ios-information-circle-outline' />
                     <Text>Description</Text>
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
          <Text>Loading</Text>
        </View>
      )
    }

  }
}

let styles = {
  shop: {
    flex: 1,
   
  },
  content:{
    backgroundColor: 'black'
  },
  footer:{
    backgroundColor: '#ffffff'
  },
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  }
}

export default connect(mapStateToProps)(Shop);
