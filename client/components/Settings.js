// React
import React, { Component } from 'react';

// Styles
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Button,
  ActionSheet,
} from 'native-base';

var BUTTONS = ["Womens", "Baby", "Mens", "Accessories"];

class ListIcon extends Component {
  state = {}

  return = () => {
    this.props.history.push('/shop')
  }

  logout = () => {
    this.props.history.push('/')
  }

  privacy = () => {
    this.props.history.push('/privacy')
  }

  terms = () => {
    this.props.history.push('/terms')
  }

  faq = () => {
    this.props.history.push('/faq')
  }

  facebookLogIn = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('534726780240095', {
        permissions: ['public_profile'],
      })
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
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
              <Button transparent onPress={this.return}>
                <Icon style={styles.icon} name='ios-arrow-back' onPress={this.return} />
              </Button> 
            </Left>
          <Text style={styles.head}>Settings</Text>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem itemDivider />
            <ListItem itemDivider>
              <Text>User</Text>
            </ListItem>
            <ListItem icon onPress={this.logout}>
              <Body>
                <Text>Log out</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </ListItem>
            <ListItem
              icon
              onPress={() =>
                ActionSheet.show({
                  options: BUTTONS,
                  title: "I'm looking for:"
                },
                buttonIndex => {
                this.props.history.push(`/custom/${BUTTONS[buttonIndex]}`);
                }
              )}
            >
              <Body>
                <Text>Shop for</Text>
              </Body>
              <Right>
                <Text>{this.state.clicked}</Text>
                <Icon name="arrow-forward"  />
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem itemDivider>
              <Text>Get Social</Text>
            </ListItem>
            <ListItem icon onPress={this.facebookLogIn}>
              <Left>
                <Icon name="logo-facebook"/>
              </Left>
              <Body>
                <Text>FaceBook</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </ListItem>
            <ListItem icon onPress={this.logout}>
              <Left>
                <Icon name="logo-instagram"/>
              </Left>
              <Body>
                <Text>Instagram</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem itemDivider>
              <Text>About Us</Text>
            </ListItem>
            <ListItem icon  onPress={this.privacy}>
              <Body>
                <Text>Privacy Policy</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </ListItem>
            <ListItem icon  onPress={this.terms}>
              <Body>
                <Text>Terms and Conditions</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem itemDivider>
              <Text>Support</Text>
            </ListItem>
            <ListItem icon onPress={this.faq}>
              <Body>
                <Text>FAQs</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>Email</Text>
              </Body>
              <Right>
                <Text>support@kukukart.com</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
};

const styles = {
  head:{
    marginTop: 10,
    fontSize: 24,
  },
  icon:{
    paddingLeft: 5,
    color: 'black',
  },
};

export default ListIcon;
