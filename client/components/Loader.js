// React
import React, { Component } from 'react';

//Styles 
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Spinner = () => (
  <View style={[styles.container]}>
    <ActivityIndicator size="large" color="#000000" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default Spinner;
