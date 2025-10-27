import { StyleSheet,TextInput, Text, View } from 'react-native'
import React from 'react'
//import { TextInput } from 'react-native/types_generated/index';


interface SearchBarProps{
    cityInput:string;
    setcityInput:React.Dispatch<React.SetStateAction<string>>
}


const SeacrhBar: React.FC<SearchBarProps> = ({cityInput,setcityInput}) => {
  return (
   <View style={styles.container}>
    <TextInput
   value={cityInput}
   onChangeText={setcityInput}
   onSubmitEditing={()=>{}}
   style={styles.input}
   />
   </View>
   
  )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20, // Space below the search bar
    },
    input: {
        height: 50, // Fixed height for the input field
        borderColor: '#DDD', // Light border color
        borderWidth: 1,
        borderRadius: 10, // Rounded corners for modern look
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#FFF', // White background for clarity
    },
});

export default SeacrhBar

