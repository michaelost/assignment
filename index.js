import React from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
//background-image: linear-gradient(180deg, rgba(5, 26, 42, 0.43) 0%, #051a2a 30%, #051a2a 100%);
class App extends React.Component {
  render() {
    const resizeMode = 'stretch';
    return (
      <ScrollView
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
          <View style={styles.contentTop}>        
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

            <View style={styles.buttonsContainer}>
              <View style={styles.blueButton}>
                <Text style={styles.blueButtonText}>
                  Repelishment
                </Text>
              </View>
              <View style={styles.yellowButton}>
                <Icon
                  name="circle"
                  size={10}
                  style={styles.circleIcon}
                />
                <Text style={styles.yellowButtonText}>
                  inactive 
                </Text>
              </View>
            </View>



          </View>
        <View style={styles.contentBotttom}>
          <View style={styles.contactsContainer}> 
            <View style={styles.contactsImageWrapper}>
              <Image
                source={require('Assignment/assets/phone.png')} 
              />
            </View>
            <View style={styles.contactsContent}>
              <Text style={styles.contactsBigText}>
                +380 90 123 45 67
              </Text>             
              <Text style={styles.contactsSmallText}>
                Phone number  
              </Text>             
            </View>
            <Image
              style={styles.feedback}
              source={require('Assignment/assets/feedback.png')} 
            />
          </View>
          <View style={styles.contactsContainer}> 
            <View style={styles.contactsImageWrapper}>
              <Image 
                source={require('Assignment/assets/envelop.png')} 
              />
            </View>
            <View style={styles.contactsContent}>
              <Text style={styles.contactsBigText}>
                smith@gmail.com
              </Text>             
              <Text style={styles.contactsSmallText}>
                Email
              </Text>             
            </View>
          </View>
          <View style={styles.contactsContainer}> 
            <View style={styles.contactsImageWrapper}>
              <Image 
                source={require('Assignment/assets/skype.png')} 
              />
            </View>
            <View style={styles.contactsContent}>
              <Text style={styles.contactsBigText}>
                smith
              </Text>             
              <Text style={styles.contactsSmallText}>
                Skype
              </Text>             
            </View>
          </View>
          <View style={styles.contactsContainer}> 
            <View style={styles.contactsImageWrapper}>
              <Image 
                source={require('Assignment/assets/facebook.png')} 
              />
            </View>
            <View style={styles.contactsContent}>
              <Text style={styles.contactsBigText}>
                Will Smith
              </Text>             
              <Text style={styles.contactsSmallText}>
                Facebook
              </Text>             
            </View>
          </View>
          <View style={styles.contactsContainer}> 
            <View style={styles.contactsImageWrapper}>
              <Image 
                source={require('Assignment/assets/site.png')} 
              />
            </View>
            <View style={styles.contactsContent}>
              <Text style={styles.contactsBigText}>
                http://companyname.com 
              </Text>             
              <Text style={styles.contactsSmallText}>
                site
              </Text>             
            </View>
          </View>
        </View>
        </View>
        </LinearGradient>
      </ScrollView>
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
  contentTop: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: screenHeight * 0.5,
  },
  contentBotttom: {
    flexDirection: 'column',
    height: screenHeight * 0.5,
    width: screenWidth,
    justifyContent: 'space-between',
  },
  titleContent: {
    height: 50,
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
   // marginTop: 20,
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth * 0.92,
  },
  blueButton: {
    paddingTop: 10, 
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#0b9fe4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  blueButtonText: {
    color: 'white',
    fontSize: 14,
  },
  yellowButton: {
    paddingTop: 10, 
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 200,
  },
  yellowButtonText: {
    color: '#e4c60b',
    fontSize: 14,
  },
  circleIcon: {
    color: '#e4c60b',
  },
  contactsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  contactsBigText: {
    color: 'white',
    fontSize: 18,
  },
  contactsSmallText: {
    color: '#34546c',
    fontSize: 14,

  },
  contactsContent: {
    
  },
  contactsImageWrapper: {
    marginLeft: 20,
    width: 40,
  },
  feedback: {
    position: 'absolute',
    right: 0,
    top: 0,
  }
});

AppRegistry.registerComponent('assignment', () => App);
