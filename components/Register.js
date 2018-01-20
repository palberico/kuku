import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native'
import { NativeRouter, Route, Switch, withRouter, Link } from 'react-router-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Left,
  Right,
  Card
} from 'native-base';

export default class Register extends Component {

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
            <Text style={styles.head}>Register</Text>
          <Right>
            <Button transparent onPress={this.doneButton}>
              <Text>Done</Text>
            </Button>
          </Right>
        </Header>
          <Content scrollEnabled={false}>
            <Form>
              <Item floatingLabel>
                <Label>First Name</Label>
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

            {/* Future search for drop down (Men's, Women's, Accessories) */}

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
