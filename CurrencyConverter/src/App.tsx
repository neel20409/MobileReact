/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import react, { useState } from 'react'
import { 
  Text,
  StatusBar,
  StyleSheet,
  useColorScheme,
  TextInput,
  FlatList,
  SafeAreaView,
  View, 
  Pressable} from 'react-native';


import { currencyByRupee } from './constants';
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';
//import ReactNativeHapticFeedback from "react-native-haptic-feedback";
// const options = {
//   enableVibrateFallback: true,
//   ignoreAndroidSystemSettings: false,
// };

function App() {
  
  const [inputvalue,setinputvalue]=useState(" ")
  const [resultvalue,setresultvalue]=useState(" ")
  const [targetcurrency,settargetCurrency]=useState(" ")
  

  const buttonpressed=(targetValue:Currency)=>{
      if(!inputvalue){
        return Snackbar.show({
          text:"Enter a Value to convert",
          backgroundColor:"#ea7773",
          textColor:"#000000"
        })
      }
      const inputAmount= parseFloat(inputvalue)
        if(!isNaN(inputAmount)){
          const convertedValue = inputAmount *targetValue.value
          const result= `${targetValue.symbol} ${convertedValue.toFixed(2)}`
          setresultvalue(result)
          settargetCurrency(targetValue.symbol)
        }
        else{
           return Snackbar.show({
          text:"NOt a Vaild number to Convert",
          backgroundColor:"#f4b32c",
          textColor:"#000000"
        })
        }
       // ReactNativeHapticFeedback.trigger("effectHeavyClick", options);
      }
  
  
  return (
 <>
      <StatusBar />
       <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
            maxLength={14}
            value={inputvalue}
            clearButtonMode='always'
            onChangeText={setinputvalue}
            keyboardType='number-pad'
            placeholder='Enter Amount in Rupee'

            />
          </View>
          {resultvalue&&(
            <Text style={styles.resultTxt}>{resultvalue}</Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
            <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item=>item.name}
            renderItem={({item})=>(
              <Pressable
              style={[
                styles.button,
                targetcurrency===item.name&&styles.selected,
              ]}
                onPress={() => buttonpressed(item)}
              >
                  <CurrencyButton {...item}/>
              </Pressable>
            )}
            />
        </View>
       </View>
    </>
  );
}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 30,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
