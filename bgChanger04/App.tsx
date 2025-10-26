import React, { useState } from 'react';
import { StyleSheet, useColorScheme, View, Text,StatusBar, TouchableOpacity } from 'react-native';



function App() {
  const [randombg,setrandombg] = useState("#ffffff");
  const generatcolor = () => {
      const hexrange = "0123456789ABCDEF"
      let color = "#"

      for (let i = 0; i < 6; i++) {
        color+=hexrange[Math.floor(Math.random()*16)]
        
      }
      setrandombg(color)
  }

  return (
    <>
    <StatusBar backgroundColor={"#000000"}/>
    <View style={[styles.container,{backgroundColor:randombg}]}>
        <TouchableOpacity
        onPress={generatcolor}>
          <View style={styles.actionbutton}>
            <Text style={styles.actionText}>Press Me</Text>
          </View>
        </TouchableOpacity>
    </View>
    </>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  actionbutton:{
    borderRadius:100,
    backgroundColor:"#6a1b4d",
    paddingVertical:10,
    paddingHorizontal:40
  },
  actionText:{
    fontSize:20,
    color:'#ffffff',
    textTransform:"uppercase"
  }
});

export default App;
