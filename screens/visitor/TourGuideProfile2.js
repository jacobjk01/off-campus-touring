import React, {useState} from 'react';
//import SeeMore from 'react-native-see-more-inline';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  Button,
  ReadMore,
} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const TourGuideProfile2 = ({navigation, route}) => {
  const [tourimages, setImages] = useState([
    {name: 'Santa Monica', src: require('../../images/SantaMonica.png')},
    {name: 'Westwood Tour', src: require('../../images/Westwood_village.png')},
  ]);

  const {item} = route.params;
  const messageButton = () => {
    return (
      <TouchableOpacity
        onPress={messageButtonHandler}
        style={styles.roundButton1}>
        <Text style={styles.messageFont}>Message</Text>
      </TouchableOpacity>
    );
  };
  const messageButtonHandler = () => {
    console.log('You have pressed the message Button');
  };

  const navigateCheckout = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('TourInfo', {item})}>
        <ImageBackground
          style={styles.listTourImage}
          imageStyle={{borderRadius: 10}}
          source={item.src}>
          <LinearGradient
            colors={['transparent', 'black']}
            style={styles.linearGradTour}
          />
        </ImageBackground>
        <Text style={styles.tourText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const bookTourButton = () => {
    const handleOnPress = () => navigation.navigate('Booking', {item});
    return (
      <TouchableOpacity onPress={handleOnPress} style={styles.roundButton2}>
        <Text style={styles.messageFont}>Book Tour</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('../../images/SantaMonica.png')}
      style={styles.backgroundImage}>
      <ScrollView
        style={{
          marginTop: '30%',
          paddingRight: 20,
          paddingLeft: 20,
          height: '100%',
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <SafeAreaView>
          {renderGuideImage({item})}
          {messageButton()}
          {bookTourButton()}

          <View style={styles.divider} />
        </SafeAreaView>
        <Text style={{marginTop: 30, fontSize: 20, fontWeight: '700'}}>
          {"Hi, I'm " + item.name + '!'}
        </Text>

        <Text style={{marginTop: 5}}></Text>
        {/* <SeeMore numberOfLines={5} style={styles.baseText}>
          {
            'Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description '
          }
        </SeeMore> */}
        <View style={styles.divider2} />
        <Text style={{marginTop: 30, fontSize: 20, fontWeight: '700'}}>
          {'Languages:'}
        </Text>
        <View style={styles.divider2} />
        <Text style={{marginTop: 30, fontSize: 20, fontWeight: '700'}}>
          {'Reviews:'}
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

const renderTourImage = ({item}) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        style={styles.listTourImage}
        imageStyle={{borderRadius: 10}}
        source={item.src}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.linearGradTour}
        />
      </ImageBackground>
      <Text style={styles.tourText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const renderGuideImage = ({item}) => {
  return (
    <View
      style={{
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image style={styles.listGuideImage} source={item.src} />
      <Text style={styles.sectionText}>{item.name}</Text>
      <Text style={styles.baseText}>
        {item.major + ','} {item.year}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  divider: {
    position: 'relative',
    marginTop: 50,

    borderBottomColor: '#9B9BA7',
    borderBottomWidth: 1,
  },
  divider2: {
    position: 'relative',
    marginTop: 20,

    borderBottomColor: '#9B9BA7',
    borderBottomWidth: 1,
  },
  backgroundRectangle: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '10.8%',
    backgroundColor: '#FFFFFF',
    // box-shadow: 0px -2px 10px rgba(151, 151, 151, 0.3);
    // borderRadius: '20px',
  },
  messageFont: {
    position: 'relative',

    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  roundButton1: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

    width: 77,
    height: 28,
    backgroundColor: '#3154A5',
    borderRadius: 10,

    position: 'absolute',
    left: 100,
    top: 200,
  },
  roundButton2: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

    width: 77,
    height: 28,
    backgroundColor: '#3154A5',
    borderRadius: 10,

    position: 'absolute',
    left: 185,
    top: 200,
  },
  listGuideImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#00BCD4',
  },
  baseText: {
    fontFamily: 'Helvetica',
    marginTop: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 50,
  },
  sectionText: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },
  input: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    // borderWidth: 1,
    // borderColor: '#656565',
    borderRadius: 7,
    paddingLeft: 20,
  },
  searchicon: {
    position: 'absolute',
    right: 10,
    top: 11,
  },
  recommendationbuttonleft: {
    flex: 1,
    backgroundColor: '#3154A5',
    borderRadius: 7,
    height: 100,
    marginRight: 15,
  },
  recommendationbuttonright: {
    flex: 1,
    backgroundColor: '#3154A5',
    borderRadius: 7,
    height: 100,
  },
  recommendationTitle: {
    marginTop: 15,
    marginLeft: 15,
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  listTourImage: {
    marginRight: 15,
    width: 200,
    height: 300,
  },

  tourText: {
    width: 200,
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
    position: 'absolute',
    bottom: 50,
    left: 20,
  },
  guideText: {
    width: 120,
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
  },
  linearGradTour: {
    position: 'absolute',
    top: 150,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  linearGradGuide: {
    position: 'absolute',
    top: 60,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
});

export default TourGuideProfile2;