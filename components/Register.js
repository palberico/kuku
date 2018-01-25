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

const styles = {
  text:{
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
  },
  head:{
    marginTop: 10,
    fontSize: 24,
  },
};

export default Register;
