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
                User
              </Text>
              <Text>
              </Text>
            </View>
          </View>
          <View style={styles.separator}>

          </View>
        
          <View style={styles.avatarContent}>
            <View style={styles.avatarImage}>
              <Image 
                source={require('Assignment/assets/avatar.png')} 
              />
            </View>
            <View style={styles.profileText}>
              <Text style={styles.profileTitle}>
                Will Smith 
              </Text>
              <Text style={styles.profileDescriptions}>
                American actor, producer, rapper, comedian, and songwriter.
                In April 2007, Newsweek called him
                "the most powerful actor in Hollywood". 
              </Text>
            </View>
          </View>

          <View style={styles.stats}>
            <View style={styles.statContainer}>
              <Text style={styles.count}>
                20 
              </Text>
              <Text style={styles.statName}>
                Patterns
              </Text>
            </View>
            <View style={styles.statContainer}>
              <Text style={styles.count}>
                358 000 T
              </Text>
              <Text style={styles.statName}>
                Tokens
              </Text>
            </View>
            <View style={styles.statContainer}>
              <Text style={styles.count}>
                20
              </Text>
              <Text style={styles.statName}>
                Investments
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
    height: 50,
//    borderWidth: 1,
//    borderColor: 'white',
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
  },
  avatarContent: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
  },
  avatarImage: {
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    flexDirection: 'column',
    width: screenWidth * 0.6,
  },
  profileTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  profileDescriptions: {
    color: '#6f9cbf',
    fontSize: 14,
  },
  separator: {
    width: screenWidth,
    height: 20,
    borderTopWidth: 1,
    borderColor: '#062033',
  },
  stats: {
    width: screenWidth * 0.9,
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: 'grey',
    backgroundColor: '#051b2b',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  statContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 18,
    color: 'white',
  },
  statName: {
    fontSize: 12,
    color: '#6f9cbf',
  },
  
});

AppRegistry.registerComponent('assignment', () => App);
