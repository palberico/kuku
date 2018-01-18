import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { NativeRouter, Switch, Route, } from 'react-router-native';
import { Container, Header, Footer, Content, Root } from 'native-base';
import { StackNavigator } from "react-navigation";
import * as firebase from 'firebase';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Login from './components/Login';
import Test from './components/Test'
import Settings from './components/Settings';
import Register from './components/Register';
import Description from './components/Description';
import axios from 'axios'

class App extends Component {
  state = { product: []}

  render() {
    return (
      <Container>

          <NativeRouter>
            <Switch>
              <Route exact path="/" component={Home}  />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/description" component={Description} />
            </Switch>
          </NativeRouter>

      </Container>
    );
  }
}

// Search List Pop-up Code

const AppNav = StackNavigator(
  {
    Settings: { screen: Settings },
  }
);

export default () =>
  <Root>
    <App />
  </Root>;
