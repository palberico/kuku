import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { NativeRouter, Switch, Route, } from 'react-router-native';
import { Container, Header, Footer, Content } from 'native-base';
import Home from './components/Home';
import Shop from './components/Shop';
import Login from './components/Login';
import Register from './components/Register';
import Description from './components/Description';
import Settings from './components/Settings';

class App extends Component {
  render() {
    return (
      <Container>
          <Content>
                <NativeRouter>
                  <Switch>
                    <Route exact path="/" component={Home}  />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/description" component={Description} />
                    <Route exact path="/settings" component={Settings} />
                  </Switch>
                </NativeRouter>
            </Content>
        </Container>
    );
  }
}

export default App;