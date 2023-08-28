import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import PasswordGenerator from './src/Screens/PasswordGenerator';

function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <PasswordGenerator />
      </View>
    </NavigationContainer>
  );
}

export default App;
