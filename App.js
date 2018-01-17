import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { NativeRouter, Switch, Route, } from 'react-router-native';
import { Container, Header, Footer, Content } from 'native-base';
import Nav from './components/Nav'
import Shop from './components/Shop'
import Login from './components/Login';
import Register from './components/Register';
import Description from './components/Description';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import MyFooter from './components/Footer';

class App extends Component {
  render() {
    return (
      <Container style={styles.body}>
          <Content>
                <NativeRouter>
                  <Switch>
                    <Route exact path="/" component={Home}  />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route path="/description" component={Description} />
                  </Switch>
                </NativeRouter>
            </Content>
        </Container>
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
};

export default App;