import React from 'react'
import { Image, Dimensions } from 'react-native'
import {
  Header,
  Body,
  Left,
  Right,
  Title,
  Button,
  Icon
} from 'native-base'

export const Nav = () => {
  return(
    <Header style={styles.header}>
      <Body>
        <Title>
          <Image style={styles.navLogo} source={require('../images/header-logo.png')} />
        </Title>
      </Body>
    </Header>
  )
}



const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const styles = {
  navLogo: {
    height: deviceHeight / 25,
    width: deviceWidth / 3,
    marginTop: 2
  },
  header: {
    backgroundColor: '#ffffff'
  }
}

export default Nav
