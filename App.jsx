import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import PasswordGenerator from './src/Screens/PasswordGenerator';
import ColorGenerator from './src/Screens/ColorGenerator';
import RollDice from './src/Screens/RollDice/RollDice';

function App() {
  return (
    <>
      <StatusBar backgroundColor={'#0000001a'} />
      <SafeAreaView style={{flex: 1}}>
        <>
          {/* <PasswordGenerator /> */}
          {/* <ColorGenerator /> */}
          <RollDice />
        </>
      </SafeAreaView>
    </>
  );
}

export default App;
