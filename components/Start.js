import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import Header from './Header';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CurrencyList from './CurrencyList';
const Start = () => {
  const [amount, Setamount] = useState('1');

  const curriencies = [
    {
      symbol: 'IDR',
      des: 'IDR - Indonesian Ruppee',
    },
    {
      symbol: 'EUR',
      des: 'EUR - Euro',
    },
  ];

  const handleInputChange = text => {
    if (/^\d+$/.test(text)) {
      Setamount(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputbox}>
        <View style={{margin: 10}}>
          <Text>USD - United States Dollar</Text>
        </View>

        <View style={styles.inline}>
          <View>
            <Text>USD</Text>
          </View>

          <View style={styles.textbox}>
            <TextInput
              style={styles.inputView}
              label="Enter Amount"
              value={amount}
              onChangeText={no => handleInputChange(no)}
            />
          </View>
        </View>
      </View>
      <CurrencyList conversionamount={amount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  inputbox: {
    width: wp('90%'),
    height: hp('20%'),
    borderWidth: 3,
    padding: 10,
  },
  textbox: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  inputView: {
    width: wp('60%'),
    height: hp('10%'),
    // justifyContent: 'right'
  },
  inline: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10
    // margin: 10,
  },
});

export default Start;
