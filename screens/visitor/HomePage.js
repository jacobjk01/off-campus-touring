import React, {useState, Component} from 'react';
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
} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../config/colors';
import {color} from 'react-native-reanimated';
import TourGuideProfile from './TourGuideProfile';
import toursData from '../../data/toursData';

const HomePage = ({navigation}) => {
  const [tourimages, setImages] = useState(toursData.images);
  const [guideimages, setGuideImages] = useState(toursData.guides);
  return (
    <SafeAreaView>
      <ScrollView style={{paddingRight: 20, paddingLeft: 20, height: '100%'}}>
        <Text style={styles.titleText}>Explore around UCLA!</Text>
        <View style={{marginTop: 30}}>
          <TextInput style={styles.input} placeholder={'Search'}></TextInput>
          <Ionicons
            style={styles.searchicon}
            name={'search-outline'}
            size={25}
            color={'#656565'}
          />
        </View>
        {/* <Text style={styles.sectionText}>Category</Text>
        <View style={{width: '100%', flexDirection: 'column', marginTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.recommendationbuttonleft}>
              <View>
                <Text style={styles.recommendationTitle}>UCLA Picks</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendationbuttonright}>
              <View>
                <Text style={styles.recommendationTitle}>
                  Outdoor Activities
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <TouchableOpacity style={styles.recommendationbuttonleft}>
              <View>
                <Text style={styles.recommendationTitle}>Sightseeing</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recommendationbuttonright}>
              <View>
                <Text style={styles.recommendationTitle}>Popular Food</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View> */}
        <View style={{marginTop: 30}}>
          <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '700'}}>
            Popular Tours
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Tours')}
            style={{position: 'absolute', right: 10, top: 3}}>
            <View>
              <Text style={{color: '#3D68CC'}}>View All &gt;</Text>
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{marginTop: 10}}
          horizontal={true}
          data={tourimages}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('TourInfo')}>
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
          )}
        />
        <View style={{marginTop: 30}}>
          <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '700'}}>
            Tour Guides
          </Text>
          <TouchableOpacity style={{position: 'absolute', right: 10, top: 3}}>
            <View>
              <Text style={{color: '#3D68CC'}}>View All &gt;</Text>
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{marginTop: 10, marginBottom: 30}}
          horizontal={true}
          data={guideimages}
          renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('TourGuideProfile', {item})}>
                <ImageBackground
                  style={styles.listGuideImage}
                  imageStyle={{borderRadius: 10}}
                  source={item.src}>
                  <LinearGradient
                    colors={['transparent', 'black']}
                    style={styles.linearGradGuide}
                  />
                </ImageBackground>
                <Text style={styles.guideText}>
                  {item.name}, {item.year}, {item.major}
                </Text>
              </TouchableOpacity>
            )
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Helvetica',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 50,
  },
  sectionText: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
    marginLeft: 10,
  },
  input: {
    alignSelf: 'center',
    backgroundColor: colors.white,
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
    backgroundColor: colors.primary,
    borderRadius: 7,
    height: 100,
    marginRight: 15,
  },
  recommendationbuttonright: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 7,
    height: 100,
  },
  recommendationTitle: {
    marginTop: 15,
    marginLeft: 15,
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  listTourImage: {
    marginRight: 15,
    width: 200,
    height: 300,
  },
  listGuideImage: {
    marginRight: 10,
    width: 120,
    height: 120,
  },
  tourText: {
    width: 200,
    fontWeight: '600',
    fontSize: 18,
    color: colors.white,
    position: 'absolute',
    bottom: 50,
    left: 20,
  },
  guideText: {
    width: 120,
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: colors.white,
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

export default HomePage;