import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native'
import { 
  Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input, 
  Label, 
  Button,
  Card
} from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text style={styles.head}>Sign In</Text>
        </Header>   
          <Button block style={styles.btn}>
            <Text style={styles.textBtn1}>Login With Facebook</Text>
          </Button>
            <Text style={styles.text}>-or-</Text>
        <Content>
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
  },
  textBtn1:{
    fontSize: 18,
    color: 'white'
  },
  text:{
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15
  },
  card:{
    marginTop: 40,
  },
  head:{
    marginTop: 10,
    fontSize: 24,
},

}