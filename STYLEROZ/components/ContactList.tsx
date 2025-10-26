import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import React from 'react'
// import { ScrollView } from 'react-native/types_generated/index'

const ContactList = () => {
    const contacts=[
  {
    "uid": 1,
    "name": "Neel Bhatt",
    "status": "Currently Learning React-Native",
    "imageUrl": "https://avatars.githubusercontent.com/u/174849406?u=9773ce7039d24b08cbd1e9a6ced3b6bddd2bc034&v=4" 
  },
  {
    "uid": 2,
    "name": "Anurag Tiwari",
    "status": "I ♥ To Code and Teach!",
    "imageUrl": "https://avatars.githubusercontent.com/u/94738352?v=4"
  },
  {
    "uid": 3,
    "name": "Alice Wonderland",
    "status": "Exploring new realms of code",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000003?v=4" 
  },
  {
    "uid": 4,
    "name": "Bob The Builder",
    "status": "Building robust applications",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000004?v=4"
  },
  {
    "uid": 5,
    "name": "Charlie Chaplin",
    "status": "Adding a touch of humor to development",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000005?v=4"
  },
  {
    "uid": 6,
    "name": "Diana Prince",
    "status": "Coding with justice and speed",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000006?v=4"
  },
  {
    "uid": 7,
    "name": "Ethan Hunt",
    "status": "Mission: Impossible - Debugging",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000007?v=4"
  },
  {
    "uid": 8,
    "name": "Fiona Appleby",
    "status": "Designing interfaces that sing 🎶",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000008?v=4"
  },
  {
    "uid": 9,
    "name": "George Martin",
    "status": "Writing clean, epic code",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000009?v=4"
  },
  {
    "uid": 10,
    "name": "Hannah Montana",
    "status": "Living the best of both coding worlds",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000010?v=4"
  },
  {
    "uid": 11,
    "name": "Ian Malcolm",
    "status": "Chaos theory applied to tech stacks",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000011?v=4"
  },
  {
    "uid": 12,
    "name": "Jessica Jones",
    "status": "Private investigator of bugs 🔍",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000012?v=4"
  },
  {
    "uid": 13,
    "name": "Kyle Reese",
    "status": "Future-proofing the codebase",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000013?v=4"
  },
  {
    "uid": 14,
    "name": "Laura Croft",
    "status": "Tomb raiding for lost libraries",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000014?v=4"
  },
  {
    "uid": 15,
    "name": "Morpheus Dream",
    "status": "The Sandman of sleepy UIs",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000015?v=4"
  }
]

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid,name,status,imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.UserImages
                }
                />
               <View>
                 <Text style={styles.username}>{name}</Text>
                <Text style ={styles.userstatus}>{status}</Text>
               </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
            color:'#ffff'
    },
    container:{
        paddingHorizontal:16,
        marginBottom:3

    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:8,
        padding:6,
        backgroundColor:'#444',
        borderRadius:6
    },
    UserImages:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:14,
    
    },
    username:{
        fontSize:18,
        fontWeight:'600',
        color:'#ffff'
    },
    userstatus:{
        fontSize:14,
        fontWeight:'400',
        color:'#aaaaaa'
    }
})