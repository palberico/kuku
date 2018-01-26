// React
import React, { Component } from 'react';

// Styles
import { Text, View, Dimensions } from 'react-native';
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
} from 'native-base';

class Register extends Component {

  cancelButton = () => {
    this.props.history.push('/')
  }

  doneButton = () => {
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
                <Input secureTextEntry={true} />
              </Item>
            </Form>
            <Text style={styles.text}>-or-</Text>
            <Button block style={styles.btn} onPress={this.facebookLogIn}>
              <Text style={styles.textBtn1}>Login With Facebook</Text>
            </Button>
            {/* ---Future--- preferences/categproes drop down (Men's, Women's, Accessories) on login landing shop */}
          <View>
            <Text style={styles.text}>By signing up and using Kuku, you are agreeing to its</Text>
            <Text style={styles.text}>Terms and Conditions and Privacy Policy.</Text>
          </View>
        </Content>
      </Container>
    )
  }
};

const deviceY = Dimensions.get('window').height;

const styles = {
  text:{
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
  },
  btn: {
    marginTop: 20,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  textBtn1:{
    fontSize: 18,
    color: 'white'
  },
  head:{
    marginTop: 10,
    fontSize: 24,
  },
};

export default Register;
