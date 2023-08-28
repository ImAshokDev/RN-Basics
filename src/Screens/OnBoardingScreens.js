import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const {WIDTH, HEIGHT} = Dimensions.get('window');
const COLORS = {primary: '#282534', white: '#fff'};

const sliderData = [
  {
    title: 'Text 1',
    subTitle: 'Lorem ipsum dolor sit amet,',
  },
  {
    title: 'Text 2',
    subTitle: 'Lorem ipsum dolor sit amet,',
  },
  {
    title: 'Text 3',
    subTitle: 'Lorem ipsum dolor sit amet,',
  },
];

const OnBoardingScreens = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View>
        <Text>OnBoardingScreens</Text>
        <FlatList
          data={sliderData}
          contentContainerStyle={{height: HEIGHT * 0.75}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default OnBoardingScreens;
