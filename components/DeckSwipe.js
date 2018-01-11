import React, { Component } from 'react'
import DummyData from './DummyData'
import CardComp from './Card'
import { Text, View, Image, Dimensions } from 'react-native'
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

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const deviceY = Dimensions.get('window').height
const deviceX = Dimensions.get('window').width

class DeckSwipe extends Component {

  crossFunc = () => {
    this._deckSwiper._root.swipeLeft()
  }

  heartFunc = () => {
    this._deckSwiper._root.swipeRight()
  }

  render(){
    return(
      <View style={styles.deckSwipe}>


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
  deckSwipe: {
    flex: 5,
    marginTop: 80,
  
  },

}


export default DeckSwipe
