import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style ={[styles.card,styles.cardelevated]}>
            <Text>
              Tap
            </Text>
        </View>
        <View style ={[styles.card,styles.cardelevated]}>
            <Text>
                me
            </Text>
        </View>
        <View style ={[styles.card,styles.cardelevated]}>
            <Text>
                too
            </Text>
        </View>
        <View style ={[styles.card,styles.cardelevated]}>
            <Text>
                Scroll
            </Text>
        </View>
        <View style ={[styles.card,styles.cardelevated]}>
            <Text>
                more..
            </Text>
        </View>
        <View style ={[styles.card,styles.cardelevated]}>
            <Text>
                😊
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

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
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,
      borderRadius:4,
      margin:8,
    
    },
    cardelevated:{
      backgroundColor:'#CAD5E2',
      elevation:4,
      shadowOffset:{
        width:1,
        height:1
      },
      shadowColor:'#EF5354',
      shadowOpacity:0.5,
      shadowRadius:2
    },
})