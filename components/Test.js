import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, Dimensions } from 'react-native';
import axios from 'axios'


class Test extends Component{
  state = { data: [] }

  componentWillMount(){

    axios.get('https://kuku-dfd4d.firebaseio.com/products.json')
      .then( res => {
        this.setState({ data: res.data })
      })
    }

  render(){
    return(
      <View>
        <Text>Test</Text>
      </View>
    )
  }

}

export default Test
