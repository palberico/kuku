import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import DummyData from './DummyData'
import CardComp from './Card'
import Nav from './Nav'
import Footer from './Footer'
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Right,
  Title,
  Button,
  Icon,
  CardItem,
  Thumbnail,
  DeckSwiper,
  Card,
} from 'native-base'

const deviceY = Dimensions.get('window').height
const deviceX = Dimensions.get('window').width

class Shop extends Component {
  render(){
    return(
     <Container>
        <Header>
            <Body>
              <Nav />
            </Body>
          </Header>

      <View style={styles.shop}>
        <DeckSwiper
          ref={(c) => this._deckSwiper = c}
          dataSource={DummyData}
          onSwipeLeft={this.leftAlert}
          onSwipeRight={this.rightAlert}
          renderItem={item =>
            <CardComp item={item} />
          }/>
      </View>
        <Footer />
      </Container>
    )
  }
}

let styles = {
  shop: {
    flex: 5,
    marginTop: 80,
    backgroundColor: '#000000'

  },

}


export default Shop;
