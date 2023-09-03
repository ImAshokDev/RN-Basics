import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';

import PasswordGenerator from './src/Screens/PasswordGenerator';
import ColorGenerator from './src/Screens/ColorGenerator';
import RollDice from './src/Screens/RollDice/RollDice';
import CurrencyConverter from './src/Screens/CurrencyConverter/CurrencyConverter';
import {TicTacToe} from './src/Screens/TicTacToe/TicTacToe';

function App() {
  return (
    <>
      <StatusBar backgroundColor={'#0000001a'} />
      <SafeAreaView style={{flex: 1}}>
        <>
          {/* <PasswordGenerator /> */}
          {/* <ColorGenerator /> */}
          {/* <RollDice /> */}
          {/* <CurrencyConverter /> */}
          <TicTacToe />
        </>
      </SafeAreaView>
      <Toast />
    </>
  );
}

export default App;
