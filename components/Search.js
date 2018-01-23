import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import Nav from './Nav';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Footer, FooterTab } from 'native-base';

export default class Search extends Component {

openShop = () => {
    this.props.history.push('/shop')
  }

openSettings = () => {
    this.props.history.push('/settings')
  }

  render() {
    return (
      <Container>
        <Nav />
        <Content style={styles.content}>
          <Card>
            <CardItem cardBody>
              <Image source={require('../images/search/mens.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>Men's Kart</Text>
                </Button>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/search/womens.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>Women's Kart</Text>
                </Button>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/search/baby.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>Baby Kart</Text>
                </Button>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/search/accessories.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>Accessory Kart</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <Footer>
            <FooterTab style={styles.footer}>
              <Button vertical onPress={this.openShop}>
                <Icon name='ios-pricetags-outline' />
                <Text>Shop</Text>
              </Button>
              <Button vertical onPress={this.openSetttings}>
                <Icon name='ios-settings-outline' />
                <Text>Settings</Text>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
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
    width: null,
    height: 200,
    resizeMode: 'contain',
  },
  textBtn1:{
    fontSize: 20,
  },
  text:{
    fontSize: 20,
    color: 'white',
  },
}
