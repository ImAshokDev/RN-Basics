import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../../Assets/Images/DiceImages/One.png';
import DiceTwo from '../../Assets/Images/DiceImages/Two.png';
import DiceThree from '../../Assets/Images/DiceImages/Three.png';
import DiceFour from '../../Assets/Images/DiceImages/Four.png';
import DiceFive from '../../Assets/Images/DiceImages/Five.png';
import DiceSix from '../../Assets/Images/DiceImages/Six.png';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const DiceComponent = ({imageUrl}) => {
  return <Image source={imageUrl} style={styles.image} />;
};

const RollDice = () => {
  const [diceImage, setDiceImage] = useState(DiceOne);

  function rollTheDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;

    switch (rollResult) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;

      case 3:
        setDiceImage(DiceThree);
        break;

      case 4:
        setDiceImage(DiceFour);
        break;

      case 5:
        setDiceImage(DiceFive);
        break;

      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger('impactLight', options);
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <Text style={styles.title}>Roll the Dice</Text>
        <DiceComponent imageUrl={diceImage} />

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={rollTheDice}
          style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>Roll the Dice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RollDice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#916DB3',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 50,
  },

  actionBtn: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    backgroundColor: '#C38154',
    borderRadius: 50,
    marginTop: 30,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },

  actionBtnText: {
    fontSize: 20,
    color: '#fff',
  },
});
