import React, { Component } from 'react'
import DummyData from './DummyData'
import CardComp from './Card'
import { Text, View, Image, Dimensions } from 'react-native'
import Nav from './Nav'
import {
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

  crossFunc = () => {
    this._deckSwiper._root.swipeLeft()
  }

  heartFunc = () => {
    this._deckSwiper._root.swipeRight()
  }

  render(){
    return(
      
  
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
    )
  }
}

let styles = {
  shop: {
    flex: 5,
    marginTop: 80,

  },

}


export default Shop;
