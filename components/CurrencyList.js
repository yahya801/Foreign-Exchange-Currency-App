import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import Header from './Header';
import DropDownPicker from 'react-native-dropdown-picker';
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
import uuid from 'react-native-uuid';
const axios = require('axios').default;
const currencyList = ({conversionamount}) => {
  const [list, Setlist] = useState([]);
  const [description, Setdescripion] = useState('');
  const [currency, Setcurrency] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [submit, Setsubmit] = useState(true);
  const basecurrency = [
    {
      symbol: 'USD',
      des: 'USD - United States Dollar',
    },
  ];
  const currencyList = [
    {value: 'IDR', label: 'IDR - Indonesian Rupaih'},
    {value: 'GBP', label: 'GBP - British Pound'},
    {value: 'SGD', label: 'SGD - Singaporean Dollar'},
  ];
  const currencyselect = item => {
    Setcurrency(item.value);
    Setdescripion(item.label);
    Setsubmit(false);
  };
  const currencysubmit = () => {
    apicurrency(currency);
  };
  const apicurrency = async curr => {
    try {
      console.log(curr);

      const response = await axios.get(
        `http://api.exchangeratesapi.io/v1/latest?access_key=76d6acb0420f7522a14a1700bb00123b&symbols=` +
          curr,
      );
      exchange = response.data.rates[curr];
      const convert = exchange * conversionamount;
      // console.log(response.data.rates[curr])
      if ((list.lengh = 0))
        Setlist([
          {
            id: uuid.v4(),
            code: currency,
            rate: exchange,
            converted: convert,
            desc: description,
          },
        ]);
      else
        Setlist([
          ...list,
          {
            id: uuid.v4(),
            code: currency,
            rate: exchange,
            converted: convert,
            desc: description,
          },
        ]);
      // let exchange = ;
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  const handleRemove = id => {
    const values = [...list];
    var removeindex = list
      .map(function (Event) {
        return Event.id;
      })
      .indexOf(id);
    values.splice(removeindex, 1);
    Setlist(values);
  };

  return (
    <View style={styles.firstcontainer}>
      {list.map(count => (
        <View key={count.id} style={styles.container}>
          <View>
            <Text>{count.code}</Text>
            <Text>{count.desc}</Text>
            <Text>
              1 {count.code} = {count.code} {count.rate}
            </Text>
          </View>
          <View>
            <Text>{count.converted}</Text>
          </View>
          <View style={{alignItems: 'center', marginLeft: 'auto'}}>
            <Button
              icon="delete"
              onPress={() => handleRemove(count.id)}></Button>
          </View>
        </View>
      ))}
      <View style={styles.inline}>
        <DropDownPicker
          items={currencyList}
          placeholder="Selet a Currency Code"
          defaultValue={currency}
          containerStyle={{height: 40, width: wp('65%')}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={item => currencyselect(item)}
        />
        <Button
          disabled={submit}
          // loading={submit ? false : true}
          onPress={() => currencysubmit()}>
          Press me
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  firstcontainer: {
    flex: 1,
    // flexDirection: 'row',
  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 15,
    width: wp('90%'),
    height: hp('15%'),
    borderWidth: 3,
  },
  inline: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
});
export default currencyList;
