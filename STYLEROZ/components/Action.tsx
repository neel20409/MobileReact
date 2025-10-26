import { Linking, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Action() {
    function openwebsite(weblink:string){
        Linking.openURL(weblink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.cards,styles.elevated]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                React Native Action Button
            </Text>
        </View>
        <Image source={{
            uri:"https://media.istockphoto.com/id/1192261427/photo/vidhan-soudha-bangalore.jpg?s=1024x1024&w=is&k=20&c=xzQaIsWG_YfB9PHyxve4477ol3hdZKRsbrq-CA9wssY="
        }}
        style={styles.cardimage}/>
       < View style={styles.bodyContainer}>
       <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere omnis quia facilis earum iusto? Dolorem, enim. Saepe facere amet aliquam quisquam, repellat ducimus tenetur, sapiente vero necessitatibus unde quam laborum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt laudantium dolor voluptate, dolorum voluptatibus quidem, unde, eveniet amet illo nulla facere dignissimos adipisci excepturi optio sed provident maxime aut repellendus.</Text>
       </View>
       < View style={styles.FooterContainer}>
        <TouchableOpacity
        onPress={()=>openwebsite('https://www.india.gov.in/my-government/indian-parliament')}>
                <Text style={styles.sociallinks}>Read more</Text>
        </TouchableOpacity>
       </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color:'#ffffff',
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    cards:{
        width:400,
        height:400,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
        
    
    },
    elevated:{
        backgroundColor:"#e07c24",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"#333",
        borderRadius:6
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#0000',
        fontSize:15,
        fontWeight:'600'
    },
    cardimage:{
        height:210,
        borderRadius:6
    },
    bodyContainer:{
        padding:10,
        color:'#ffff'
    },
    FooterContainer:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    sociallinks:{
        fontSize:16,
        color:'#0000',
        backgroundColor:'#FFFF',
        paddingHorizontal:9,
        paddingVertical:6,
        borderRadius:15,

    }
})