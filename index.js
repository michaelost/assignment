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

import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

EStyleSheet.build({ 
  $rem: screenWidth / 380,
});

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
              <Image 
                source={require('Assignment/assets/menu.png')} 
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
                <Text
                  style={styles.profileDescriptions}
                >
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

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'black',
    
    height: screenHeight,
  },
  contentTop: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  contentBotttom: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: screenWidth,
    flex: 1,
  },
  titleContent: {
    height: 50,
    justifyContent: 'center',
  },
  title: {
    width: screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: '25rem',
    color: 'white',
    fontFamily: 'SF Light',
  },
  content: {
    alignItems: 'center',
    height: screenHeight,
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
    fontSize: '24rem',
    color: 'white',
    fontFamily: 'SF Semibold',
    fontWeight: 'bold',
  },
  profileDescriptions: {
    marginTop: '5rem',
    color: '#6f9cbf',
    fontSize: '14rem',
    fontFamily: 'SF Light',
  },
  separator: {
    width: screenWidth,
    height: 20,
    borderTopWidth: 1,
    borderColor: '#062033',
  },
  stats: {
    width: screenWidth * 0.9,
    padding: '18rem',
    marginTop: '20rem',
    marginBottom: '20rem',
    borderRadius: 15,
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
    fontSize: '18rem',
    color: 'white',
    marginBottom: '4rem',
  },
  statName: {
    fontSize: '12rem',
    color: '#6f9cbf',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth * 0.92,
    marginBottom: '5rem',
    
  },
  blueButton: {
    paddingTop: '14rem', 
    paddingBottom: '14rem',
    backgroundColor: '#0b9fe4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: screenWidth * 0.43,
  },
  blueButtonText: {
    color: 'white',
    fontSize: '14rem',
  },
  yellowButton: {
    paddingTop: '14rem', 
    paddingBottom: '14rem',
    width: screenWidth * 0.43,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0b3657',
    borderRadius: 8,
  },
  yellowButtonText: {
    color: '#e4c60b',
    fontSize: '14rem',
  },
  circleIcon: {
    width: 20,
    color: '#e4c60b',
  },
  contactsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  contactsBigText: {
    fontFamily: 'SF Regular',
    color: 'white',
    fontSize: '18rem',
    marginBottom: '3rem',
  },
  contactsSmallText: {

    fontFamily: 'SF Medium',
    color: '#34546c',
    fontSize: '14rem',

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
