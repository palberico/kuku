import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Badge } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Content style={styles.background}>
      <Image style={styles.hero} source={require('../images/tshirt.jpg')} />
     
     <View>
       <Button block style={styles.btn}>
            <Text style={styles.textBtn1}>Login With Facebook</Text>
          </Button>
          </View>
          <View>
          <Button block light style={styles.btn2}>
            <Text style={styles.textBtn2}>Join With Email</Text>
          </Button>
        </View>
      
  
            <Text style={styles.text}>Have an account? Sign in</Text>
  
          
        
       

      </Content>

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
  btn: {
    marginTop: 40,
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
  textBtn1:{
    fontSize: 18,
    color: 'white'
  },
  textBtn2:{
    fontSize: 18,
  },
  text:{
    textAlign: 'center',
    marginTop: 65,
},
  background:{
    backgroundColor: '#ffffff'
  },
}

