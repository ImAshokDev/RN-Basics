import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Icons} from './Icons';

import {Toast} from 'react-native-toast-message/lib/src/Toast';

export function TicTacToe() {
  const [gameState, setGameState] = useState(new Array(9).fill('', 0, 9));
  const [winner, setWinner] = useState('');

  const [currentPlayer, setCurrentPlayer] = useState('');
  const [mySelect, setMySelect] = useState('');

  const checkWinner = name => {
    if (
      gameState[0] !== '' &&
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2]
    ) {
      // setWinner(`${name} is won the match!!!`);
      setWinner(name);
    } else if (
      gameState[3] !== '' &&
      gameState[3] === gameState[4] &&
      gameState[3] === gameState[5]
    ) {
      // setWinner(`${name} is won the match!!!`);
      setWinner(name);
    } else if (
      gameState[6] !== '' &&
      gameState[6] === gameState[7] &&
      gameState[6] === gameState[8]
    ) {
      // setWinner(`${name} is won the match!!!`);
      setWinner(name);
    } else if (
      gameState[0] !== '' &&
      gameState[0] === gameState[3] &&
      gameState[0] === gameState[6]
    ) {
      // setWinner(`${name} is won the match!!!`);
      setWinner(name);
    } else if (
      gameState[1] !== '' &&
      gameState[1] === gameState[4] &&
      gameState[1] === gameState[7]
    ) {
      // setWinner(`${name} is won the match!!!`);
      setWinner(name);
    } else if (
      gameState[2] !== '' &&
      gameState[2] === gameState[5] &&
      gameState[2] === gameState[8]
    ) {
      // setWinner(`${name} is won the match!!!`);
      setWinner(name);
    } else if (
      gameState[0] !== '' &&
      gameState[0] === gameState[4] &&
      gameState[0] === gameState[8]
    ) {
      // setWinner(`${name} is won the match!!!`);
      setWinner(name);
    } else if (
      gameState[2] !== '' &&
      gameState[2] === gameState[4] &&
      gameState[2] === gameState[6]
    ) {
      // setWinner(`${name} is won the match!!!`);
      setWinner(name);
    } else if (!gameState.includes('', 0)) {
      setWinner('Match draw!!!');
    }
  };

  const onChangeLogic = index => {
    if (!winner) {
      if (currentPlayer) {
        if (!gameState[index]) {
          gameState[index] = currentPlayer;

          setCurrentPlayer(currentPlayer === 'circle' ? 'cross' : 'circle');
        }
      } else {
        Toast.show({
          type: 'error',
          text1: 'Please select player',
        });
      }

      checkWinner(currentPlayer);
    }
  };

  const handleSelectPlayer = name => {
    setCurrentPlayer(name);
    setMySelect(name);
  };

  const handleReset = () => {
    setGameState(new Array(9).fill('', 0, 9));
    setWinner('');

    setCurrentPlayer('');
    setMySelect('');
  };

  function resultRender(name) {
    switch (name) {
      case 'circle':
        if ('circle' === mySelect) {
          return 'You Won!!! 🏆';
        } else {
          return 'You Lost 😱';
        }
        break;
      case 'cross':
        if ('cross' === mySelect) {
          return 'You Won!!! 🏆';
        } else {
          return 'You Lost 😱';
        }
        break;

      default:
        return name;
        break;
    }
  }

  //   CONTENT
  function renderHeader() {
    return (
      <View style={styles.selectView}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.btnView}>
          <TouchableOpacity
            disabled={mySelect ? true : false}
            activeOpacity={0.4}
            onPress={() => handleSelectPlayer('circle')}
            style={[
              styles.btn,
              currentPlayer === 'circle' && styles.activeBtn,
            ]}>
            <Text style={styles.icon}>{'O'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={mySelect ? true : false}
            activeOpacity={0.4}
            onPress={() => handleSelectPlayer('cross')}
            style={[styles.btn, currentPlayer === 'cross' && styles.activeBtn]}>
            <Text style={styles.icon}>{'X'}</Text>
          </TouchableOpacity>
        </View>
        {mySelect && (
          <Text style={styles.text2}>
            Your Selection: {mySelect === 'circle' ? 'O' : 'X'}
          </Text>
        )}

        {currentPlayer && (
          <Text style={styles.text2}>
            {currentPlayer === 'circle' ? `Play O's Turn` : `Play X's Turn`}
          </Text>
        )}
      </View>
    );
  }

  function renderFooter() {
    return (
      <View style={styles.btnView}>
        {winner ? (
          <TouchableOpacity
            activeOpacity={1}
            style={[
              styles.resetBtn,
              winner === mySelect ? styles.winBtn : styles.lostBtn,
            ]}>
            <Text style={styles.text}>{resultRender(winner)}</Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => handleReset()}
          style={[styles.resetBtn]}>
          <Text style={styles.text}>{'Reset'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <FlatList
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          contentContainerStyle={styles.contentView}
          data={gameState}
          numColumns={3}
          // keyExtractor={element => element}
          renderItem={({el, index}) => {
            return (
              <TouchableOpacity
                disabled={winner ? true : false}
                activeOpacity={0.4}
                key={index}
                onPress={() => onChangeLogic(index)}
                style={styles.touchBox}>
                <Icons name={gameState[index]} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentView: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#ffffff',
    fontSize: 30,
    marginBottom: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  touchBox: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#dfdfdf',
  },

  icon: {
    color: '#000000',
    fontSize: 30,
  },

  // selectView
  selectView: {
    flexDirection: 'column',
    marginBottom: 30,
    alignItems: 'center',
  },

  btnView: {
    flexDirection: 'row',
  },
  btn: {
    width: 100,
    height: 60,
    backgroundColor: '#B9B4C7',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  activeBtn: {
    backgroundColor: '#FFC436',
    borderWidth: 1,
  },

  winBtn: {
    backgroundColor: '#38cc77',
  },

  lostBtn: {
    backgroundColor: '#FFC436',
  },

  // resetBtn
  resetBtn: {
    backgroundColor: '#edededed',
    height: 60,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  text: {
    color: '#000000',
    fontSize: 20,
  },

  text2: {
    color: '#ffffff',
    fontSize: 25,
    marginTop: 20,
  },
});
