import React, { Component } from 'react';
import { Container, Header, Content, Button, List, ListItem, Text, Icon, Left, Body, Right, Switch, Separator, ActionSheet } from 'native-base';
import { NativeRouter, Route, withRouter, Link } from 'react-router-native';

// Search List Pop-up Code
var BUTTONS = ["Men's", "Women's", "Baby", "Accessories"];

export default class ListIcon extends Component {

  // Search List Pop-up Code
  constructor(props) {
    super(props);
    this.state = {};
  }

  return = () => {
    this.props.history.push('/shop')
  }

  logout = () => {
    this.props.history.push('/')
  }

  privacy = () => {
    this.props.history.push('/privacy')
    }
  
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name='ios-arrow-back' onPress={this.return} />
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

             {/* Search List Pop-up Code */}
            <ListItem icon
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  title: "I'm looking for:"
            },
            buttonIndex => {
              this.setState({ clicked: BUTTONS[buttonIndex] });
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

          {/* End Search List Pop-up Code */}
    
            </ListItem>
            <ListItem itemDivider />
            <ListItem itemDivider>
            <Text>Get Social</Text>
            </ListItem>
            <ListItem icon onPress={this.logout}>
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
            <ListItem icon onPress={this.logout}>
              <Left>
                <Icon name="ios-share-outline"/>
              </Left>
              <Body>
                <Text>Share the App</Text>
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
            <ListItem icon  onPress={this.logout}>
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
            <ListItem icon onPress={this.logout}>
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
    );
  }
}

const styles = {
    head:{
      marginTop: 10,
      fontSize: 24,
  },
}
