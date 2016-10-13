'use strict';

const React = require('react');
const ReactNative = require('react-native');
const SearchPage = require('./SearchPage');

const { AppRegistry } = ReactNative;

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'Property Finder',
            component: SearchPage
        }}
      />
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
