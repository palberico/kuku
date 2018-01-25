import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Link } from 'react-router-native';
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

  openCustom = (category) => {
    this.props.history.push(`/custom/${category}`)
  }

  openSettings = () => {
    this.props.history.push('/settings')
  }

  render() {
    return (
      <Container>
        <Header style={styles.content} />
      <Content style={styles.content}>
        <View>
          <Link to="/shop">
            <Card>
              <CardItem cardBody>
                <Image source={require('../images/home/tshirt3.jpg')}
                  style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
                <CardItem >
                  <Body>
                    <Button dark full onPress={this.openShop} >
                      <Text style={styles.textBtn1}>Go Kuku</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </Link>
            <Link to="/custom/Womens">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/womens.jpg')} 
                    style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Body>
                    <Button full dark onPress={ () => this.openCustom('Womens')} >
                    <Text style={styles.textBtn1}>Women's Kart</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </Link>
            <Link to="/custom/Baby">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/baby.jpg')} 
                    style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Body>
                    <Button full dark onPress={ () => this.openCustom('Baby')} >
                      <Text style={styles.textBtn1}>Baby Kart</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </Link>
            <Link to="custom/Mens">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/mens.jpg')} 
                    style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Body>
                    <Button full dark onPress={() => this.openCustom('Mens')} >
                      <Text style={styles.textBtn1}>Men's Kart</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </Link>
            <Link to="/custom/Accessories">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/accessories.jpg')} 
                    style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
              <CardItem>
                <Body>
                  <Button full dark onPress={ () => this.openCustom('Accessories')} >
                  <Text style={styles.textBtn1}>Accessory Kart</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          </Link>
          </View>
        </Content>
        <Footer style={styles.content} />
      </Container>
    );
  }
}

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
    color: 'white',
  },
  icon:{
    color: 'white',
  },
}

export default Search;
