import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View>
      <Text style = {styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.card1]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.card2]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.card3]}>
            <Text>Blue</Text>
        </View>
         <View style={[styles.card,styles.card1]}>
            <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
    headingText:{
        color:'#ffffff',
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8
    },
    card1:{
       
       backgroundColor:"#ef5354"
    },
    card2:{
       
       backgroundColor:"#50dbb4"
    },
    card3:{
       
       backgroundColor:"#5da3fa"
    },
})