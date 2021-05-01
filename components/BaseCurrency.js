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
const BaseCurrency = () => {
  const [amount, setAmount] = useState('1');
  const handleInputChange = text => {
    if (/^\d+$/.test(text)) {
      setAmount(text);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputBox}>
        <View style={{margin: 10}}>
          <Text style={{color: '#ffffff'}}>EUR - Euro</Text>
        </View>

        <View style={styles.inline}>
          <View>
            <Text style={{fontSize: 18, alignSelf: 'center', color: '#ffffff'}}>
              EUR
            </Text>
          </View>

          <View style={styles.textBox}>
            <TextInput
              //   mode="outlined"
              style={styles.inputView}
              placeholder="Enter Amount"
              //   selectionColor="red"
              value={amount}
              backgroundColor="white"
              onChangeText={no => handleInputChange(no)}
              underlineColor="null"
            />
          </View>
        </View>
      </View>

      <CurrencyList conversionAmount={amount} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  inputBox: {
    width: wp('90%'),
    height: hp('25%'),
    borderWidth: 3,
    borderColor: 'white',
    padding: 10,
  },
  textBox: {
    flexDirection: 'row',
    marginLeft: 'auto',
    // backgroundColor: 'red'
  },
  inputView: {
    width: wp('60%'),
    height: hp('10%'),
    // justifyContent: 'right'
  },
  inline: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10,
    // margin: 10,
  },
});

export default BaseCurrency;
