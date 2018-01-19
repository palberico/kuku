import React, { Component } from 'react'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Text, View, Image, TouchableHighlight, Dimensions } from 'react-native'
import Nav from './Nav'
import {
  Body,
  Left,
  CardItem,
  Thumbnail,
  Card,
  Footer,
} from 'native-base'

class CardComp extends Component {
  render(){
    return(
        <View>
          <TouchableHighlight>
            {/* TODO: history.push description.js */}
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri:this.props.item['Image Src']}} />
                  <Body>
                    <Text>{this.props.item['Title']}</Text>
                    <Text note>{this.props.item['Variant Price']}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Body>
                  <Image
                    style={styles.cardImage}
                    source={{uri:this.props.item['Image Src']}}
                  />
                </Body>
              </CardItem>
              <Footer style={styles.cardFooter} />
            </Card>
          </TouchableHighlight>
        </View>
      )
    }
  }

const deviceY = Dimensions.get('window').height
const deviceX = Dimensions.get('window').width
const styles = {
  cardImage:{
    width: deviceX,
    height: deviceY/ 2,
    resizeMode: 'contain',
  },
  cardFooter:{
    width: 10,
    backgroundColor: '#ffffff',
  },
}

export default CardComp
