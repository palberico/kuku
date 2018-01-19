import React, { Component } from 'react';
import { Container, Header, Content, Button, List, ListItem, Text, Icon, Left, Body, Right, Switch, Separator, ActionSheet } from 'native-base';
import { NativeRouter, Route, withRouter, Link } from 'react-router-native';

// Search List Pop-up Code
var BUTTONS = ["Men's", "Women's", "Accessories"];

export default class ListIconExample extends Component {

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
            <ListItem icon>
              <Body>
                <Text onPress={this.logout}>Log out</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" onPress={this.logout}/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Body>
             {/* Search List Pop-up Code */}
              <Text 
                onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "I'm looking for:"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
            >Shop</Text>
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
            <ListItem icon>
              <Left>
                <Icon name="logo-facebook" onPress={this.logout} />
              </Left>
              <Body>
                <Text onPress={this.logout}>FaceBook</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" onPress={this.logout}/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="logo-instagram" onPress={this.logout} />
              </Left>
              <Body>
                <Text onPress={this.logout}>Instagram</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" onPress={this.logout}/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-share-outline" onPress={this.logout} />
              </Left>
              <Body>
                <Text onPress={this.logout}>Share the App</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" onPress={this.logout}/>
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem itemDivider>
            <Text onPress={this.logout}>About Us</Text>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text onPress={this.logout}>Privacy Policy</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" onPress={this.logout}/>
              </Right>
            </ListItem>
            <ListItem icon>
            <Body>
                <Text onPress={this.logout}>Terms and Conditions</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" onPress={this.logout}/>
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem itemDivider>
            <Text>Support</Text>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text onPress={this.logout}>FAQs</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" onPress={this.logout}/>
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
