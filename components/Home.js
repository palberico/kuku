// React
import React, { Component } from 'react';

// Styles
import { Text, View, Image, Dimensions } from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Right,
} from 'native-base';

// Router
import { Link } from 'react-router-native';

// Redux
import { connect } from 'react-redux';
import { fetchProducts, resetCart } from '../actions/products';

// Images for Home Screen
const randomImages = [
  require('../images/home/tshirt.jpg'),
  require('../images/home/tshirt2.jpg'),
  require('../images/home/tshirt3.jpg'),
  require('../images/home/tshirt4.jpg'),
];

class Home extends Component {

  componentDidMount = async() => {
    await this.props.dispatch(fetchProducts())
    // Reset cart counter on refresh
    this.props.dispatch(resetCart())
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
    this.props.history.push('/search')
  }

  facebookLogIn = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('534726780240095', {
        permissions: ['public_profile'],
      })
    if (type === 'success') {
      // Gets the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      this.props.history.push('/search')
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      )
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Right>
            <Button iconRight transparent onPress={this.guest}>
              <Text style={styles.guest}>GUEST</Text>
              <Icon style={styles.icon} name='ios-arrow-forward' />
            </Button>
          </Right>
        </Header>
        <Content style={styles.background} scrollEnabled={false}>
          <Image
            style={styles.hero}
            source={randomImages[Math.floor(Math.random()*randomImages.length)]}
          />
          <View>
            <Image
              style={styles.logo}
              source={require('../images/header-logo.png')}
            />
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
    )
  }
};

const deviceY = Dimensions.get('window').height;
const styles = {
  hero: {
    height: deviceY/ 2,
    width: deviceY/ 1.5,
  },
  logo: {
    marginTop: 20,
    height: deviceY/ 18,
    width: deviceY/ 4,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  btn: {
    marginTop: 20,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  btn2: {
    marginTop: 15,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  textBtn:{
    fontSize: 18,
    color: 'white',
  },
  textBtn2:{
    fontSize: 18,
  },
  text:{
    textAlign: 'center',
    marginTop: 100,
  },
  background:{
    backgroundColor: '#ffffff',
  },
  guest: {
    fontWeight: 'bold',
  },
  icon:{
    paddingLeft: 2,
    color: 'black',
  },
};

export default connect()(Home);
