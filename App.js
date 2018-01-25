// React
import React, { Component } from 'react'

// Routing
import { NativeRouter, Switch, Route, } from 'react-router-native';
import { StackNavigator } from "react-navigation";

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Styling Parent
import { Root } from 'native-base';

// Components
import Faq from './components/Faq';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Login from './components/Login';
import Terms from './components/Terms';
import Custom from './components/Custom';
import Search from './components/Search';
import CardComp from './components/Card';
import Privacy from './components/Privacy';
import Settings from './components/Settings';
import Register from './components/Register';
import Description from './components/Description';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

            <NativeRouter>
              <Switch>
                <Route exact path="/" component={Home}  />
                <Route exact path="/faq" component={Faq} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/cart/:category" component={Cart} />
                <Route exact path="/custom/:category" component={Custom} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/terms" component={Terms} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/card" component={CardComp}  />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/description/:title/:category/:fromComponent" component={Description} />
              </Switch>
            </NativeRouter>

      </Provider>
    );
  }
}

const AppNav = StackNavigator(
  {
    Settings: { screen: Settings },
  }
);

export default () =>
  <Root>
    <App />
  </Root>;
