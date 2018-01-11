import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch, Link } from 'react-router-native';
import Nav from './components/Nav'
import DeckSwipe from './components/DeckSwipe'
// import Footer from './components/Footer'
import Login from './components/Login';
import Register from './components/Register';
import Description from './components/Description';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import {
  Container, 
  Header, 
  Title, 
  Content,
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon,
  Drawer
} from 'native-base';


class App extends Component {
  state = { drawerOpen: false }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen }, () => {
      if (this.state.drawerOpen)
        this.openDrawer();
      else
        this.closeDrawer();
    });
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  };


  render() {
    return (
      <NativeRouter>
        <Container style={styles.body}>
        <Nav />
          <Content >
            <Drawer
                ref={ ref => { this.drawer = ref }}
                content={<Sidebar close={() => this.toggleDrawer()} navigator={this._navigator} />}
                onClose={() => this.closeDrawer()}
                >
            </Drawer>
              { this.state.drawerOpen ? null :
              <View>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route exact path="/description" component={Description} />
                </Switch>
              </View>
            }
              </Content>
                  <Footer>
                    <FooterTab style={styles.footer}>
                      <Button vertical onPress={() => this.toggleDrawer()}>
                        <Icon name='ios-menu' />
                          <Text>Menu</Text>
                      </Button>
                      <Button vertical>
                        <Icon name='ios-information-circle-outline' />
                          <Text>Description</Text>
                      </Button>
                      <Button vertical>

                      {/* <Button badge vertical onPress={this.addLike}>
                        <Badge><Text>{this.state.counter}</Text></Badge> */}
                        
                        <Icon name='md-heart-outline' />
                          <Text>Loved</Text>
                      </Button>
                    </FooterTab>
                  </Footer>
        </Container>
      </NativeRouter>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    body:{
      backgroundColor: '#ffffff',
  },
  footer:{
    backgroundColor: '#ffffff'
  },
};

export default App;


//       {/* <Container style={styles.body}>
//         <Nav />
//         <DeckSwipe />
//         <Footer />
//       </Container>
//       </NativeRouter>
//     )
//   }
// }

// const styles = {
//   body:{
//     backgroundColor: '#000000'
//   }
// } */}