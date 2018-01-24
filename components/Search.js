import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import Nav from './Nav';
import { 
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem, 
  Thumbnail, 
  Text, 
  Button, 
  Icon, 
  Left,
  View,
  Body, 
  Right, 
  Footer, 
  FooterTab,
} from 'native-base';

class Search extends Component {

  openShop = () => {
    this.props.history.push('/shop')
  }

  openSettings = () => {
    this.props.history.push('/settings')
  }

  render() {
    return (
      <Container>
        <Header style={styles.content}>
          {/* <Left>
              <Button vertical transparent onPress={this.openSettings}>
                <Icon name='ios-settings-outline' style={styles.icon} />
              </Button>
            </Left> */}
        </Header>
      <Content>

        <View>
          <Card>
          <CardItem cardBody>
              <Image source={require('../images/header-logo.png')} 
                style={styles.cardImage}
                />
            </CardItem>
            <CardItem >
              <Body>
                <Button transparent onPress={this.openShop} >
                  <Text style={styles.textBtn1}>Kuku Kart</Text>
                </Button>
                </Body>
            </CardItem>
            </Card>
          </View>
            <Card>
            <View style={{height: 15}} />
            <CardItem cardBody>
              <Image source={require('../images/search/mens.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                <Button transparent onPress={this.openShop} >
                  <Text style={styles.textBtn1}>Men's Kart</Text>
                </Button>
              </Body>
            </CardItem>
            </Card>
            <Card>
            <View style={{height: 15}} />
            <CardItem cardBody>
              <Image source={require('../images/search/womens.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            <Body>
                <Button transparent onPress={this.openShop} >
                  <Text style={styles.textBtn1}>Women's Kart</Text>
                </Button>
          </Body>
            </CardItem>
            </Card>
            <Card>
            <View style={{height: 15}} />
            <CardItem cardBody>
              <Image source={require('../images/search/baby.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                <Button transparent onPress={this.openShop} >
                  <Text style={styles.textBtn1}>Baby Kart</Text>
                </Button>
            </Body>
            </CardItem>
            </Card>
            <Card>
            <View style={{height: 15}} />
            <CardItem cardBody>
              <Image source={require('../images/search/accessories.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Body>
                <Button transparent onPress={this.openShop} >
                  <Text style={styles.textBtn1}>Accessory Kart</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Footer style={styles.content} />
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
    resizeMode: 'contain',
  },
  textBtn1:{
    fontSize: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'black',
  },
  icon:{
    color: 'white',
  },
}

export default Search;