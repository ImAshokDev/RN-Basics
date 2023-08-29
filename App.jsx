import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import PasswordGenerator from './src/Screens/PasswordGenerator';
import ColorGenerator from './src/Screens/ColorGenerator';
import RollDice from './src/Screens/RollDice/RollDice';
import CurrencyConverter from './src/Screens/CurrencyConverter/CurrencyConverter';

function App() {
  return (
    <>
      <StatusBar backgroundColor={'#0000001a'} />
      <SafeAreaView style={{flex: 1}}>
        <>
          {/* <PasswordGenerator /> */}
          {/* <ColorGenerator /> */}
          {/* <RollDice /> */}
          <CurrencyConverter />
        </>
      </SafeAreaView>
    </>
  );
}

export default App;
