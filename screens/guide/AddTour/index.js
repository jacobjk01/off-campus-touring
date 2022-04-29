import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Animated,
  StatusBar,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { primary, white, gray, black, red } from 'config/colors';
import { styles } from './styles';
import Foreground from './Foreground';
import Header from './Header';
import Content from './Content';
import BackButton from 'components/BackButton'
import SubmitButton from 'components/SubmitButton';
import { getMeetingPts } from 'api/tours';
/**
 * 
 * @param {{
 *    navigation: {
 *      navigate : () => {}
 *    },
 *    route: {
 *      params: {
 *        description: any,
 *        id: any,
 *        picture: any,
 *        ref: any,
 *        title: any
 *    }
 *    }} props 
 */
const AddTour = (props) => {
  const {description, id,picture,ref,title} = props.route.params
  console.log('asdfsdf' + props.route.params)
  const [name, setName] = useState(title ||'')
  const [duration, setDuration] = useState('')
  const [maxPeople, setMaxPeople] = useState(1)
  const [transportation, setTransportation] = useState('walking')
  const [introduction, setIntroduction] = useState(description || '')
  const [backgroundImage, setBackgroundImage] = useState(picture || '')
  const [dates, setDates] = useState([])
  const [meetingPts, setMeetingPts] = useState([]);
  useEffect(() => {
    getMeetingPts(id).then(res => {
      setMeetingPts(res)
      console.log(res)
      console.log(id)
    }).catch(console.error)
  },[id])

  return (
    <View style={{backgroundColor: white}}>
        <StatusBar barStyle='dark-content' />
        <ScrollView>
          <BackButton navigation={props.navigation}/>
            <Foreground backgroundImage={backgroundImage}/>
            <Content 
              id={id}
              transportation={transportation}
              setTransportation={setTransportation}
              name={name}
              setName={setName}
              duration={duration}
              setDuration={setDuration}
              maxPeople={maxPeople}
              setMaxPeople={setMaxPeople}
              introduction={introduction}
              setIntroduction={setIntroduction}
              navigation={props.navigation}
              setDates={setDates}
              dates={dates}
              meetingPts={meetingPts}
              setMeetingPts={setMeetingPts}
            />
        </ScrollView>
        <TouchableOpacity
            style={styles.continue}
            onPress={() => props.navigation.navigate('TourGuideList')}>
            <Text style={{alignSelf: 'center', color: white, fontWeight: '700'}}>
            {'View Suggested Itinerary'}
            </Text>
        </TouchableOpacity>
    </View>
  );
}

export default AddTour