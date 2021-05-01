import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import Header from './Header';
import BaseCurrency from './BaseCurrency'
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <BaseCurrency />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
  },
  inputView: {
    backgroundColor: '#003f5c',
    // borderRadius: 30,
    width: wp('100%'),
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    width: wp('100%'),
    flex: 1,
    fontSize: 20,
    alignItems: 'flex-start',
    backgroundColor: '#003f5c',
  },
  Text: {
    color: 'white',
    fontSize: 24,
  },
  top: {
    marginTop: 80,
    alignItems: 'center',
  },
  otherboxes: {
    height: hp('50%'),
    width: wp('100%'),
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  otherboxes2: {
    height: hp('20%'),
    width: wp('100%'),
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    // flex: 1,
    width: '80%',
    marginBottom: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EC3726',
  },
  button2: {
    width: '80%',
    marginBottom: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#42A4FE',
  },
});

export default Home;
