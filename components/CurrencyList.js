import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
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
const currencyList = ({conversionAmount}) => {
  const [list, setList] = useState([]);
  const [description, setDescripion] = useState('');
  const [currency, setCurrency] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [submit, setSubmit] = useState(true);
  const currencyList = [
    {value: 'IDR', label: 'IDR - Indonesian Rupaih'},
    {value: 'GBP', label: 'GBP - British Pound'},
    {value: 'SGD', label: 'SGD - Singaporean Dollar'},
    {value: 'JPY', label: 'JPY - Japanese Yen'},
    {value: 'PKR', label: 'PKR - Pakistani Ruppee'},
  ];
  const currencySelect = item => {
    setCurrency(item.value);
    setDescripion(item.label);
    setSubmit(false);
  };
  const currencySubmit = () => {
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
      const convert = exchange * conversionAmount;
      // console.log(response.data.rates[curr])
      if ((list.lengh = 0))
        setList([
          {
            id: uuid.v4(),
            code: currency,
            rate: exchange,
            converted: convert,
            desc: description,
          },
        ]);
      else
        setList([
          ...list,
          {
            id: uuid.v4(),
            code: currency,
            rate: exchange,
            converted: convert,
            desc: description,
          },
        ]);
    } catch (err) {
      console.error(err);
    }
  };
  const handleRemove = id => {
    const values = [...list];
    var removeIndex = list
      .map(function (Event) {
        return Event.id;
      })
      .indexOf(id);
    values.splice(removeIndex, 1);
    setList(values);
  };
  const thousands_Separators = num => {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  };

  return (
    <View style={styles.firstContainer}>
      {list.map(count => (
        <View key={count.id} style={styles.container}>
          <View style={{width: wp('50%')}}>
            <Text style={{fontSize: 18, color: '#ffffff'}}>{count.code}</Text>
            <Text style={{color: '#ffffff'}}>{count.desc}</Text>
            <Text style={{fontSize: 18, color: '#ffffff'}}>
              1 EUR = {count.code} {count.rate.toFixed(2)}
            </Text>
          </View>
          <View style={{width: wp('20%')}}>
            <Text style={{fontSize: 16, color: '#ffffff'}}>
              {thousands_Separators(count.converted.toFixed(2))}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginLeft: 'auto',
              width: wp('10%'),
            }}>
            <Button onPress={() => handleRemove(count.id)}>
              <Icon name="trash" size={24} color="#fff" />
            </Button>
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
          onChangeItem={item => currencySelect(item)}
        />
        <Button
          disabled={submit}
          // loading={submit ? false : true}
          color="white"
          onPress={() => currencySubmit()}>
          Press me
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 15,
    width: wp('90%'),
    height: hp('15%'),
    borderWidth: 3,
    borderColor: 'white'
  },
  inline: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
});
export default currencyList;
