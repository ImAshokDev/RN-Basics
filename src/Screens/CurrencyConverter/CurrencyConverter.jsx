import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Snackbar from 'react-native-snackbar';

import InputField from './InputField';

import {currencyByRupee} from './constant';

const CurrencyConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [resultValue, setResultValue] = useState('');

  function currencyConverter(item) {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#D71313',
        textColor: '#ffff',
      });
    }

    const inputAmount = parseFloat(inputValue);

    if (!isNaN(inputAmount)) {
      const convertedValue = inputValue * item?.value;
      const result = `${convertedValue.toFixed(2)}`;

      setResultValue(result);
      setTargetValue(item);
    } else {
      return Snackbar.show({
        text: 'Not a Number',
        backgroundColor: '#D71313',
        textColor: '#ffff',
      });
    }
  }

  function renderHeader() {
    return (
      <View style={styles.headerView}>
        <View style={styles.inputView}>
          <Text style={styles.rupeeSymbol}>₹</Text>
          <View style={styles.inputField}>
            <InputField
              value={inputValue}
              onChangeText={setInputValue}
              keyboardType={'number-pad'}
              inputStyles={styles.inputStyles}
            />
          </View>
        </View>

        <View style={styles.resultView}>
          <Text style={styles.currencySymbol}>{targetValue?.symbol}</Text>
          <Text style={styles.currencyValue}>{resultValue}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.title}>Currency Converter</Text>
      </View>

      <View style={styles.contentView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          ListHeaderComponent={renderHeader}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{flexGrow: 1}}
                key={index}
                activeOpacity={0.6}
                onPress={() => currencyConverter(item)}>
                <View
                  style={[
                    styles.itemView,
                    targetValue?.name === item?.name && styles.selectedItem,
                  ]}>
                  <Text style={styles.flag}>{item?.flag}</Text>
                  <Text style={styles.country}>{item?.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CurrencyConverter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  // nav bar
  navBar: {
    height: 56,
    backgroundColor: '#ffffff',

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#fff',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  // content Section
  contentView: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },

  //input section

  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },

  rupeeSymbol: {
    fontSize: 45,
    marginRight: 30,
    color: '#B9B4C7',
  },
  inputField: {
    // flexGrow: 1,
    width: 200,
  },
  inputStyles: {
    fontSize: 18,
    color: '#352F44',
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },

  // result section
  resultView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  currencySymbol: {
    fontSize: 30,
    marginRight: 15,
    color: '#B9B4C7',
  },
  currencyValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },

  //item
  itemView: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    margin: 8,

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: '#DAC0A3',
  },

  flag: {
    fontSize: 28,
  },
  country: {
    fontSize: 18,
    color: '#000',
  },
});
