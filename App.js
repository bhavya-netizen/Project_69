import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScanScreen from './screens/scanScreen';

export default class App extends React.Component {
  render(){
    return(
      <ScanScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});