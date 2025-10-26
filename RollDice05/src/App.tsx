
import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View , Text,ImageSourcePropType,Image,TouchableOpacity, Pressable} from 'react-native';

import DiceOne from '../assets/one.png'
import DiceTwo from '../assets/two.png'
import DiceThree from '../assets/three.png'
import DiceFour from '../assets/four.png'
import DiceFive from '../assets/five.png'
import DiceSix from '../assets/six.png'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';


const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
const Dice = ({imageUrl}:DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}
function App() {
  const [diceimage,setadiceimage]= useState<ImageSourcePropType>(DiceOne)

  const rooldicetap=()=>{
    let randomnumber = Math.floor(Math.random()*6)+1
    switch(randomnumber){
      case 1:
        setadiceimage(DiceOne)
        break;
      case 2:
        setadiceimage(DiceTwo)
        break;
      case 3:
        setadiceimage(DiceThree)
        break;
      case 4:
        setadiceimage(DiceFour)
        break;
      case 5:
        setadiceimage(DiceFive)
        break;
      case 6:
        setadiceimage(DiceSix)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactMedium", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceimage} />   
    <Pressable onPress={rooldicetap}>
      <Text
        style={styles.rollDiceBtnText}
      >Roll Dice</Text>
    </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40, 
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    elevation: 2
  }, 
  imageWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  diceContainer: {
    margin: 20,
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
  },
  diceImage: {
    marginHorizontal: 10,
    width: 125,
    height: 125
  },
  lite: {
    opacity: 0.95,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
    backgroundColor: '#333'
  },
});


export default App;
