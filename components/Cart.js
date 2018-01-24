import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, Dimensions } from 'react-native';
import Nav from './Nav';
import { connect } from 'react-redux';
import axios from 'axios';
import { setSelected } from '../actions/products';
import { Link } from 'react-router-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Thumbnail,
} from 'native-base';

class Cart extends Component {

  state = { loaded: false, items: [], obj: {} }

  showDescription = (title) => {
    this.props.history.push(`/description/${title}`)
  }

  componentDidMount(){
    axios.get('https://kukudb-ff7f7.firebaseio.com/cart.json')
      .then( res => {
        let array = []
        for ( let each in res.data){
          array.push([res.data[each], each])
        }
        this.setState({ items: array, loaded: true, obj: res.data})
      })
    }

  openShop = () => this.props.history.push('/shop')

  openSettings = () => {
    this.props.history.push('/settings')
  }

  removeFromCart = async (item) => {
    await axios.delete(`https://kukudb-ff7f7.firebaseio.com/cart/${item}.json`)
    axios.get('https://kukudb-ff7f7.firebaseio.com/cart.json')
      .then( res => {
        let array = []
        for ( let each in res.data){
          array.push([res.data[each], each])
        }
        this.setState({ items: array, loaded: true, obj: res.data})
      })
  }

  displayItems = () => {
    return this.state.items.map( item => {
      return (

        <TouchableHighlight onPress={() => this.showDescription(item[0]['Title'])} key={item[0]['Title']}>
          <Card>
            <CardItem cardBody>
              <Image source={{uri:item[0]['Image Src']}} style={styles.cardImage} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text note style={styles.textBtn1}>{item[0]['Vendor']}</Text>
                  <Text style={styles.textBtn1}> - </Text>
                  <Text style={styles.textBtn1}>{item[0]['Type']}</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Icon name='ios-close-circle-outline' style={styles.deleteIcon}
                    onPress={() => this.removeFromCart(item[1])} />
                </Button>
              </Right>
            </CardItem>
          </Card>
        </TouchableHighlight>

      )
    })
  }

  render(){
    if(this.state.loaded){
      return(
        <Container style={styles.content}>
          <Nav />
          <Content>
            { this.state.items.length <= 0 ?
              <Text style={styles.textEmptyCart}>Your Cart is Empty</Text> :
              <Text></Text> }
            <View>
              {this.displayItems()}
            </View>
          </Content>
          <Footer>
            <FooterTab style={styles.footer}>
              <Button vertical onPress={this.openShop}>
                <Icon name='ios-pricetags-outline' />
                <Text>Shop</Text>
              </Button>
              <Button vertical onPress={this.openSettings}>
                <Icon name='ios-settings-outline' />
                <Text>Settings</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      )
    }else{
      return(
        <Card>
          <Text>Loading...</Text>
        </Card>
      )
    }
  }
}

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').height
const deviceY = Dimensions.get('window').height
const deviceX = Dimensions.get('window').width


const styles = {
  content:{
    backgroundColor: 'black'
  },
  cardImage:{
    width: deviceX,
    height: deviceY/ 2,
    resizeMode: 'contain',
  },
  textBtn1:{
    fontSize: 20,
  },
  text:{
    fontSize: 20,
    color: 'white',
  },
  textEmptyCart:{
    flex: 1,
    marginTop: '50%',
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  deleteIcon:{
    fontSize: 35,
    color: 'black',
  },
}



export default Cart;
