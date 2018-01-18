import React, { Component } from 'react';
import { Container, Header, Content, Button, List, ListItem, Text, Icon, Left, Body, Right, Switch, Separator, ActionSheet } from 'native-base';
import { NativeRouter, Route, withRouter, Link } from 'react-router-native';

// Search List Pop-up Code
var BUTTONS = ["Men's", "Women's", "Accessories"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

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
                <Button transparent small >
                <Icon name="arrow-forward" onPress={this.logout}/>
                </Button>
              </Right>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>Shop</Text>
              </Body>
              <Right>

             {/* Search List Pop-up Code */}
              <Button transparent
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
          >
          <Text></Text>
          <Icon name="arrow-forward" />
          </Button>

          {/* End Search List Pop-up Code */}
    
             </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem itemDivider>
            <Text>Get Social</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="logo-facebook" />
              </Left>
              <Body>
                <Text>FaceBook</Text>
              </Body>
              <Right>
                <Button transparent>
                <Icon name="arrow-forward" onPress={this.logout} />
                </Button>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="logo-instagram" />
              </Left>
              <Body>
                <Text>Instagram</Text>
              </Body>
              <Right>
                <Button transparent>
                <Icon name="arrow-forward" onPress={this.logout} />
                </Button>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-share-outline" />
              </Left>
              <Body>
                <Text>Share the App</Text>
              </Body>
              <Right>
                <Button transparent>
                <Icon name="arrow-forward" onPress={this.logout} />
                </Button>
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem itemDivider>
            <Text>About Us</Text>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>Privacy Policy</Text>
              </Body>
              <Right>
                <Button transparent>
                <Icon name="arrow-forward" onPress={this.logout} />
                </Button>
              </Right>
            </ListItem>
            <ListItem icon>
            <Body>
                <Text>Terms and Conditions</Text>
              </Body>
              <Right>
                <Button transparent>
                <Icon name="arrow-forward" onPress={this.logout} />
                </Button>
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem itemDivider>
            <Text>Support</Text>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>FAQs</Text>
              </Body>
              <Right>
                <Button transparent>
                <Icon name="arrow-forward" onPress={this.logout} />
                </Button>
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
