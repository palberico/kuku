import React from 'react';
import { Image, Dimensions } from 'react-native';
import {
  Header,
  Body,
  Title,
} from 'native-base';
import { Link } from 'react-router-native';

export const Nav = () => {
  return(
    <Header style={styles.header}>
      <Body>
        <Link to="/search">
          <Title>
            <Image style={styles.navLogo} source={require('../images/header-logo.png')} />
          </Title>
        </Link>
      </Body>
    </Header>
  )
}

const deviceY = Dimensions.get('window').height
const deviceX = Dimensions.get('window').width
const styles = {
  navLogo: {
    height: deviceY / 25,
    width: deviceX / 3,
    marginTop: 2
  },
  header: {
    backgroundColor: '#ffffff'
  }
}

export default Nav;
