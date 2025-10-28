import React, { useState } from 'react';
import { 
  StatusBar,
  StyleSheet, 
  useColorScheme, 
  View,
  Text,
  Pressable,
  FlatList,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';
//import { FlatList } from 'react-native/types_generated/index';

function App() {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>("");
  const [gameState, setGameState] = useState<string[]>(new Array(9).fill('empty'));

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty'));
  }

  const checkIsWinner = () => {
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the Game 🥳🥳`);
    } else if (
      gameState[3] === gameState[4] &&
      gameState[3] === gameState[5] &&
      gameState[3] !== 'empty'
    ) {
      setGameWinner(`${gameState[3]} won the Game 🥳🥳`);
    }
    else if (
      gameState[6] === gameState[7] &&
      gameState[6] === gameState[8] &&
      gameState[6] !== 'empty'
    ) {
      setGameWinner(`${gameState[6]} won the Game 🥳🥳`);
    }
    else if (
      gameState[0] === gameState[3] &&
      gameState[0] === gameState[6] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the Game 🥳🥳`);
    }
    else if (
      gameState[1] === gameState[4] &&
      gameState[1] === gameState[7] &&
      gameState[1] !== 'empty'
    ) {
      setGameWinner(`${gameState[1]} won the Game 🥳🥳`);
    }
    else if (
      gameState[2] === gameState[5] &&
      gameState[2] === gameState[8] &&
      gameState[2] !== 'empty'
    ) {
      setGameWinner(`${gameState[2]} won the Game 🥳🥳`);
    }
    else if (
      gameState[0] === gameState[4] &&
      gameState[0] === gameState[8] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the Game 🥳🥳`);
    }
    else if (
      gameState[2] === gameState[4] &&
      gameState[2] === gameState[6] &&
      gameState[2] !== 'empty'
    ) {
      setGameWinner(`${gameState[2]} won the Game 🥳🥳`);
  }else if (!gameState.includes("empty")) {
      setGameWinner("It's a Draw 😐😐");
    }
  }
  const changeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor:'#000000',
        textColor:'#FFFFFF',
        duration: Snackbar.LENGTH_INDEFINITE,
      });
    }
if (gameState[itemNumber] === 'empty') {
    gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
}else{
  return Snackbar.show({
    text: 'Position already filled !',
    backgroundColor:'#000000',
    textColor:'#FFFFFF',
    duration: Snackbar.LENGTH_SHORT,
  });
}
    
    checkIsWinner();
  }

  return (
    <>
    <StatusBar />
    {gameWinner ? (
      <View style={[styles.playerInfo, styles.winnerInfo]}>
        <Text style={styles.winnerTxt}>{gameWinner}</Text>
      </View>
    ):(
      <View
      style={[styles.playerInfo,
      isCross ? styles.playerX : styles.playerO
      ]}
      >
      <Text style={styles.gameTurnTxt}>
       Player {isCross ? "X's Turn" : "O's Turn"} 's Turn
      </Text>
      </View>
    )}
    <FlatList
    numColumns={3}
    data={gameState}
    style={styles.grid}
    renderItem={({item, index}: {item: string; index: number})=>(
      <Pressable
      onPress={() => changeItem(index)}
      style={styles.card}
      >
      <Icons name={item}/>
      </Pressable>
    )}
    />
    <Pressable
    onPress={reloadGame}
    style={styles.gameBtn}
    >
      <Text style={styles.gameBtnText}>
        {gameWinner?'Play Again':'Reset Game'}
      </Text>
    </Pressable>
    </>
  );
}


const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default App;

