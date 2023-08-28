import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import PasswordGenerator from './src/Screens/PasswordGenerator';
import ColorGenerator from './src/Screens/ColorGenerator';

function App() {
  return (
    <>
      <StatusBar backgroundColor={'#0000001a'} />
      <SafeAreaView style={{flex: 1}}>
        <>
          {/* <PasswordGenerator /> */}
          <ColorGenerator />
        </>
      </SafeAreaView>
    </>
  );
}

export default App;
