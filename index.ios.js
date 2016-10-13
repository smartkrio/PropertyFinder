import React, { Component } from 'react';
var SearchPage = require('./SearchPage.js');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PropertyFinderApp extends Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage
        }}/>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
    container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
