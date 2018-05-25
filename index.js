import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Text>
        Welcome to react-native
      </Text>
    );
  }
}

AppRegistry.registerComponent('assignment', () => App);
