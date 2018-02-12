import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { Link } from 'react-router-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux'
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Right,
} from 'native-base';
import { fetchProducts, setProducts, addToCart } from '../actions/products';

const randomImages = [
  require('../images/home/tshirt.jpg'),
  require('../images/home/tshirt2.jpg'),
  require('../images/home/tshirt3.jpg'),
  require('../images/home/tshirt4.jpg'),
];

class Home extends Component {

  componentDidMount = async() => {
    await this.props.dispatch(fetchProducts())
  }

  joinEmailButton = () => {
    this.props.history.push('/register')
  }

  loginButton = () => {
    this.props.history.push('/login')
  }

  testButton = () => {
    this.props.history.push('/test')
  }

  guest = () => {
    this.props.history.push('/shop')
  }

  facebookLogIn = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('534726780240095', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      this.props.history.push('/shop')
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Right>
            <Button iconRight transparent onPress={this.guest}>
              <Text style={styles.guest}>GUEST </Text>
              <Icon name='ios-arrow-forward' />
            </Button>
          </Right>
        </Header>
        <Content style={styles.background} scrollEnabled={false}>
          <Image style={styles.hero} source={randomImages[Math.floor(Math.random()*randomImages.length)]}/>
          <View>
            <Image style={styles.logo} source={require('../images/header-logo.png')} />
            <Button block style={styles.btn} onPress={this.facebookLogIn}>
              <Text style={styles.textBtn}>Login With Facebook</Text>
            </Button>
          </View>
          <View>
            <Link to='register'>
              <Button block light style={styles.btn2} onPress={this.joinEmailButton}>
                <Text style={styles.textBtn2}>Join With Email</Text>
              </Button>
            </Link>
          </View>
        <Button full transparent onPress={this.loginButton}>
          <Text style={styles.text}>Have an account? Sign in</Text>
        </Button>
        </Content>
      </Container>
    );
  }
}
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').height
const deviceY = Dimensions.get('window').height
const deviceX = Dimensions.get('window').width

const styles = {
  hero: {
    height: deviceHeight/ 2,
    width: deviceWidth/ 1.5,
  },
  logo: {
    marginTop: 20,
    height: deviceHeight/ 18,
    width: deviceWidth/ 4,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  btn: {
    marginTop: 20,
    width: deviceWidth/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  btn2: {
    marginTop: 15,
    width: deviceWidth/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  textBtn:{
    fontSize: 18,
    color: 'white'
  },
  textBtn2:{
    fontSize: 18,
  },
  text:{
    textAlign: 'center',
    marginTop: 100,
  },
  background:{
    backgroundColor: '#ffffff'
  },
  guest: {
    fontWeight: 'bold'
  },
}

export default connect()(Home);
