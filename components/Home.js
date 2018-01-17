import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native'
import { NativeRouter, Route, Switch, withRouter, Link } from 'react-router-native';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container,
    Header,
    Content,
    Button,
    Icon,
    Footer,
    Badge } from 'native-base';

class Home extends Component {

  joinEmailButton = () => {
    this.props.history.push('/register')
  }
  
  loginButton = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <Container>
         <Header />
        <Content style={styles.background}>
          <Image style={styles.hero} source={require('../images/tshirt.jpg')} />
     <View>
     <Image style={styles.logo} source={require('../images/header-logo.png')} />
       <Button block style={styles.btn}>
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
        </Content>
        <Footer style={styles.homeFooter}>
        <Button full transparent onPress={this.loginButton}>
          <Text style={styles.text}>Have an account? Sign in</Text>
        </Button>
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
    marginTop: 45,
},
  background:{
    backgroundColor: '#ffffff'
  },
  homeFooter:{
    backgroundColor: '#ffffff',
  },
}

export default Home;