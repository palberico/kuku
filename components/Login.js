// React
import React, { Component } from 'react';

// Styles
import { Text, Dimensions } from 'react-native';
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
} from 'native-base';

class Login extends Component {

  cancelButton = () => {
    this.props.history.push('/')
  }

  doneButton = () => {
    this.props.history.push('/search')
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
              <Input secureTextEntry={true} />
            </Item>
          </Form>
          <Text style={styles.text}>-or-</Text>
          <Button block style={styles.btn}>
            <Text style={styles.textBtn1}>Login With Facebook</Text>
          </Button>
        </Content>
      </Container>
    )
  }
};
const deviceWidth = Dimensions.get('window').height;

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
  head:{
    marginTop: 10,
    fontSize: 24,
  },
  loginFooter:{
    marginTop: 25,
    backgroundColor: '#ffffff',
  },
};

export default Login;
