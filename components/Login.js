import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native'
import { NativeRouter, Route, Switch, withRouter, Link } from 'react-router-native';
import { 
  Container, 
  Header, 
  Content,
  Footer, 
  Form, 
  Item, 
  Input, 
  Label, 
  Button,
  Left,
  Right,
  Card
} from 'native-base';

export default class Login extends Component {

  cancelButton = () => {
    this.props.history.push('/')
  }

  doneButton = () => {
    this.props.history.push('/shop')
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.cancelButton}>
              <Text>Cancel</Text>
            </Button>
          </Left>
        <Text style={styles.head}>Sign In</Text>
          <Right>
            <Button transparent onPress={this.doneButton}>
              <Text>Done</Text>
            </Button>
          </Right>
        </Header>   
        <Content scrollEnabled={false}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Text style={styles.text}>-or-</Text>
        
          <Button block style={styles.btn}>
            <Text style={styles.textBtn1}>Login With Facebook</Text>
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
  btn: {
    width: deviceWidth/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 25,
  },
  textBtn1:{
    fontSize: 18,
    color: 'white'
  },
  text:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15
  },
  card:{
    marginTop: 40,
  },
  head:{
    marginTop: 10,
    fontSize: 24,
},
loginFooter:{
  marginTop: 25,
  backgroundColor: '#ffffff',
},
}