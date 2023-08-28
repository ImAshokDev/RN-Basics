import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ColorGenerator = () => {
  const [bgColor, setBgColor] = useState('');

  const hexaRange = '0123456789ABCDEF';

  function colorGenerator() {
    let color = '#';

    for (let i = 0; i < 6; i++) {
      const codeIndex = Math.floor(Math.random() * 16);
      color += hexaRange.charAt(codeIndex);
    }

    setBgColor(color);
  }
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor ? bgColor : 'pink',
        },
      ]}>
      <TouchableOpacity activeOpacity={0.4} onPress={colorGenerator}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Color Generator</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ColorGenerator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9A3B3B',

    height: 56,
    paddingHorizontal: 30,

    borderRadius: 50,

    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
  },

  btnText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
