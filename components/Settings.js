import React, { Component } from 'react';
import { Container, Header, Content, Button, List, ListItem, Text, Icon, Left, Body, Right, Switch, Separator } from 'native-base';
import { NativeRouter, Route, withRouter, Link } from 'react-router-native';

export default class ListIconExample extends Component {

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
                <Text>Log out</Text>
              </Body>
              <Right>
                <Button transparent small >
                <Icon name="arrow-forward" onPress={this.logout}/>
                </Button>
              </Right>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>Gender</Text>
              </Body>
              <Right>
                <Text>Male</Text>
                <Icon name="arrow-forward" />
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
