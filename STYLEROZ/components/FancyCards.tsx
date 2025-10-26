import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const FancyCards= () => {
   return(
     <View>
        <Text style={styles.headingText}>Trending Places</Text>
       <ScrollView horizontal={true} style={styles.container}>
         <View style={[styles.card, styles.cardElevated]}>
            <Image
                source={{
                    uri: 'https://images.pexels.com/photos/33754560/pexels-photo-33754560.jpeg'
                }} 
                style={styles.cardImg}
        />
        <View style ={styles.cardBody}>
            <Text style={styles.cardTitle}>Greece</Text>
            <Text style={styles.cardlabel}>Country In Europe</Text>
            <Text style={styles.cardDescription}>Beautiful  Greece is a southeastern European country known for its ancient history, stunning islands, and as the birthplace of democracy and Western philosophy.
            </Text>
              <Text style={styles.cardfooter}>10hrs Fight</Text>
              </View>
        </View>
         <View style={[styles.card, styles.cardElevated]}>
            <Image
                source={{
                    uri: 'https://images.pexels.com/photos/14176495/pexels-photo-14176495.jpeg'
                }} 
                style={styles.cardImg}
        />
        <View style ={styles.cardBody}>
            <Text style={styles.cardTitle}>Himalayas </Text>
            <Text style={styles.cardlabel}>Mountain Ranges in North Of India</Text>
            <Text style={styles.cardDescription}>The Himalayas are a majestic mountain range in Asia, stretching across countries like India, Nepal, Bhutan, China, and Pakistan. Known for their towering peaks, including Mount Everest—the highest point on Earth.
            </Text>
              <Text style={styles.cardfooter}>10hrs</Text>
              </View>
        </View>
         <View style={[styles.card, styles.cardElevated]}>
            <Image
                source={{
                    uri: 'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg'
                }} 
                style={styles.cardImg}
        />
        <View style ={styles.cardBody}>
            <Text style={styles.cardTitle}>Venezia </Text>
            <Text style={styles.cardlabel}>Vento,Italy</Text>
            <Text style={styles.cardDescription}>The Venezia (Venice), in Veneto, Italy, is a historic city built on canals, famed for its romantic gondolas, Renaissance art, and stunning architecture.Venice is built on more than 100 small islands in a lagoon of the Adriatic Sea.
            </Text>
              <Text style={styles.cardfooter}>8hrs</Text>
              </View>
        </View>
       </ScrollView>
    </View>
   )
}

export default FancyCards

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
        width:295,
        height:390,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated:{
        backgroundColor:'#ffffff',
        color:'#000000',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        borderRadius:6
    },
    cardImg:{
        marginBottom:8,
        borderTopLeftRadius:6,
        height:200,
        width:295,
        borderTopRightRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardlabel:{
          color:'#000000',
           fontSize:14,
            marginBottom:6
    },
    cardfooter:{
          color:'#000000',
          
    },
    cardDescription:{
          color:'#758283',
          fontSize:12,
          marginTop:6,
          marginBottom:12,
          flexShrink:1
    }

})
