/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import EchartsTrend from './EchartsTrend';
import MarketSale from './MarketSale';
import MarketTab from './MarketTab';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  render() {
    
    return (
      <View style={styles.container}>

        
        <View style={styles.blank}></View>

        
        <View style={styles.headView}>
          <EchartsTrend></EchartsTrend>
        </View>
        
        <MarketTab ></MarketTab>
        
        <View style={styles.list}>
          <MarketSale ></MarketSale>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // backgroundColor:'yellow',
  },
  blank: {
    height: 20,
  },
  headView: {
    height: 200,
    // backgroundColor: "yellow",
  },
  tab: {
    height: 44,
  },
  list: {
    flex: 1,
    // backgroundColor: "yellow",
  }
});
