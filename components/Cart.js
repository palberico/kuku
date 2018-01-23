import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, Dimensions } from 'react-native';
import Nav from './Nav';
import CartCards from './CartCards';
import { connect } from 'react-redux';
import { setSelected } from '../actions/products';
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

  state = { loaded: false, items: [] }

  showDescription = (title) => {
    this.props.history.push(`/description/${title}`)
  }

  componentDidMount(){
    this.setState({ items: this.props.items.cart, loaded: true })
  }

  openShop = () => this.props.history.push('/shop')

  displayItems = () => {
    return this.state.items.map( item => {
      return (

        <TouchableHighlight onPress={() => this.showDescription(this.props.item['Title'])}>
        <Card>
          {/* <CardItem>
            <Left>
              <Thumbnail source={{uri:item['logo']}} />
              <Body>
                <Text>{item['Title']}</Text>
                <Text note>{item['Vendor']}</Text>
              </Body>
            </Left>
          </CardItem> */}
          <CardItem cardBody>
            <Image source={{uri:item['Image Src']}} style={styles.cardImage} />
          </CardItem>
          {/* <CardItem>
            <Body>
              <Text>{item['Body']}</Text>
            </Body>
          </CardItem> */}
          <CardItem>
          
            <Left>
              <Button transparent>
                <Text note style={styles.textBtn1}>{item['Vendor']}</Text>
                <Text style={styles.textBtn1}> - </Text>
                <Text style={styles.textBtn1}>{item['Type']}</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Text style={styles.textBtn1}>Unlove</Text>
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
              <Button vertical>
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
}

const mapStateToProps = (state) => {
  return {
    items: state.cart
  }
}

export default connect(mapStateToProps)(Cart);
