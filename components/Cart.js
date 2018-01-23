import React, { Component } from 'react';
import { Text, Dimensions, View, Image } from 'react-native';
import Nav from './Nav';
import CartCards from './CartCards';
import { connect } from 'react-redux'
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

  componentDidMount(){
    this.setState({ items: this.props.items.cart, loaded: true })
  }

  openShop = () => this.props.history.push('/shop')

  displayItems = () => {
    return this.state.items.map( item => {
      return (
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri:item['logo']}} />
              <Body>
                <Text>{item['Title']}</Text>
                <Text note>{item['Vendor']}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri:item['Image Src']}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{item['Body']}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="ios-cart" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon active name="ios-trash" />
              </Button>
            </Right>
          </CardItem>
        </Card>
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

let styles = {
  content:{
    backgroundColor: 'white'
  },
}

const mapStateToProps = (state) => {
  return {
    items: state.cart
  }
}

export default connect(mapStateToProps)(Cart);
