// React
import React, { Component } from 'react';

// Styles
import { Image, Dimensions } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  View,
  Body,
  Left,
  Icon,
  Footer,
} from 'native-base';

// Router
import { Link } from 'react-router-native';

// Components
import Nav from './Nav';

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

  logOut = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <Container>
        <Header style={styles.content}>
          <Left>
            <Icon name='ios-arrow-back' style={styles.icon} onPress={this.logOut} />
          </Left>
        </Header>
      <Content style={styles.content}>
        <View>
          <Link to="/shop">
            <Card>
              <CardItem cardBody>
                <Image source={require('../images/home/tshirt3.jpg')}
                  style={{height: 200, width: null, flex: 1}}/>
                <Text style={styles.kuku}>  Go Kuku                </Text>
              </CardItem>
              </Card>
            </Link>
            <Link to="/custom/Womens">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/womens.jpg')}
                    style={{height: 200, width: null, flex: 1}}/>
                  <Text style={styles.kuku}>  Women's Kart               </Text>
                </CardItem>
              </Card>
            </Link>
            <Link to="/custom/Baby">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/baby.jpg')}
                    style={{height: 200, width: null, flex: 1}}/>
                  <Text style={styles.kuku}>  Baby Kart                </Text>
                </CardItem>
              </Card>
            </Link>
            <Link to="custom/Mens">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/mens.jpg')}
                    style={{height: 200, width: null, flex: 1}}/>
                  <Text style={styles.kuku}>  Men's Kart               </Text>
                </CardItem>
              </Card>
            </Link>
            <Link to="/custom/Accessories">
              <Card>
                <CardItem cardBody>
                  <Image source={require('../images/search/accessories.jpg')}
                    style={{height: 200, width: null, flex: 1}}/>
                    <Text style={styles.kuku}>  Accessory Kart               </Text>
                </CardItem>
            </Card>
          </Link>
          </View>
        </Content>
        <Footer style={styles.content} />
      </Container>
    )
  }
};

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
  kuku: {
    position: 'absolute',
    fontSize: 25,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    color: 'white'
  },
}

export default Search;
