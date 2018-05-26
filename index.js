import React from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
//background-image: linear-gradient(180deg, rgba(5, 26, 42, 0.43) 0%, #051a2a 30%, #051a2a 100%);
class App extends React.Component {
  render() {
    const resizeMode = 'stretch';
    return (
      <View
        style={styles.container}
      >
        
        <LinearGradient
          colors={["rgba(5, 26, 42, 0.43)", "#051a2a"]}
          style={{flex: 1}}
        >

        
        <View style={styles.content}>
          <View style={styles.titleContent}>
            <View style={styles.title}>
              <Icon
                name="align-left"
                size={25}
                style={{color: 'white'}}
              />
              <Text style={styles.titleText}>
                Пользователь
              </Text>
              <Text>
              </Text>
            </View>
          </View>
        </View>
        </LinearGradient>
      </View>
    );
  }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  titleContent: {
  },
  title: {
    width: screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    color: 'white',
  },
  content: {
    alignItems: 'center',
    marginTop: 20,
  }
});

AppRegistry.registerComponent('assignment', () => App);
