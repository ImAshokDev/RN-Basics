import React from 'react';
import {TextInput} from 'react-native';

const InputField = ({
  placeholder,
  keyboardType,
  value,
  onChangeText,
  inputStyles,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      style={[
        inputStyles,
        {
          backgroundColor: '#fff',
          height: 48,
          borderWidth: 2,
          borderColor: '#E2C799',
          borderRadius: 8,
        },
      ]}
      maxLength={10}
      // clearButtonMode="always"
    />
  );
};

export default InputField;
