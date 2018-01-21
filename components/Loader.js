import React, { Component } from 'react';
import { Container, Header, Content } from 'native-base';
import { ActivityIndicator, StyleSheet, View } from 'react-native'


export default class Spinner extends Component {

  render() {
    return (
      <View style={[styles.container]}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})
