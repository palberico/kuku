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
export default class Register extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text style={styles.head}>Register</Text>
        </Header>   
 
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Gender</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View>
          <Text style={styles.text}>By signing up and using Kuku, you are agreeing to its
          </Text>
          <Text style={styles.text}>Terms and Conditions and Privacy Policy.</Text>
          </View>
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
  text:{
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15
  },
  head:{
    marginTop: 10,
    fontSize: 24,
},
}