import { StyleSheet,Image, Text, View ,ScrollView} from 'react-native'
import React from 'react'
// import {  } from 'react-native/types_generated/index'

const WatsStatus = () => {
       const contacts = [
  {
    "uid": 1,
    "firstName": "Neel",
    "lastName": "Bhatt",
    "status": "Currently Learning React-Native",
    "imageUrl": "https://avatars.githubusercontent.com/u/174849406?u=9773ce7039d24b08cbd1e9a6ced3b6bddd2bc034&v=4" 
  },
  {
    "uid": 2,
    "firstName": "Anurag",
    "lastName": "Tiwari",
    "status": "I ♥ To Code and Teach!",
    "imageUrl": "https://avatars.githubusercontent.com/u/94738352?v=4"
  },
  {
    "uid": 3,
    "firstName": "Alice",
    "lastName": "Wonderland",
    "status": "Exploring new realms of code",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000003?v=4" 
  },
  {
    "uid": 4,
    "firstName": "Bob",
    "lastName": "The Builder",
    "status": "Building robust applications",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000004?v=4"
  },
  {
    "uid": 5,
    "firstName": "Charlie",
    "lastName": "Chaplin",
    "status": "Adding a touch of humor to development",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000005?v=4"
  },
  {
    "uid": 6,
    "firstName": "Diana",
    "lastName": "Prince",
    "status": "Coding with justice and speed",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000006?v=4"
  },
  {
    "uid": 7,
    "firstName": "Ethan",
    "lastName": "Hunt",
    "status": "Mission: Impossible - Debugging",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000007?v=4"
  },
  {
    "uid": 8,
    "firstName": "Fiona",
    "lastName": "Appleby",
    "status": "Designing interfaces that sing 🎶",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000008?v=4"
  },
  {
    "uid": 9,
    "firstName": "George",
    "lastName": "Martin",
    "status": "Writing clean, epic code",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000009?v=4"
  },
  {
    "uid": 10,
    "firstName": "Hannah",
    "lastName": "Montana",
    "status": "Living the best of both coding worlds",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000010?v=4"
  },
  {
    "uid": 11,
    "firstName": "Ian",
    "lastName": "Malcolm",
    "status": "Chaos theory applied to tech stacks",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000011?v=4"
  },
  {
    "uid": 12,
    "firstName": "Jessica",
    "lastName": "Jones",
    "status": "Private investigator of bugs 🔍",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000012?v=4"
  },
  {
    "uid": 13,
    "firstName": "Kyle",
    "lastName": "Reese",
    "status": "Future-proofing the codebase",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000013?v=4"
  },
  {
    "uid": 14,
    "firstName": "Laura",
    "lastName": "Croft",
    "status": "Tomb raiding for lost libraries",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000014?v=4"
  },
  {
    "uid": 15,
    "firstName": "Morpheus",
    "lastName": "Dream",
    "status": "The Sandman of sleepy UIs",
    "imageUrl": "https://avatars.githubusercontent.com/u/70000015?v=4"
  }
];
  return (
    <View>
      <Text
      style={styles.headingText}>
        Status</Text>
        <ScrollView
        horizontal={true}
        style={styles.scroll}
        >
            {contacts.map(({uid,firstName,lastName,status,imageUrl})=>(
                <View
                key={uid}
                style={styles.container}
                >
                    <Image
                    source={
                        {
                            uri:imageUrl
                        }
                    }
                    style={styles.img}
                    />
                    <Text 
                    style={styles.names}>{firstName}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}

export default WatsStatus

const styles = StyleSheet.create({
headingText:{
    color:'#ffffff',
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
},
names:{
    color:'#ffff',
    fontSize:18,
    fontWeight:'bold',
    flex:1,
 
    
},
scroll:{
paddingHorizontal:15,
},
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',  
    backgroundColor:'#444',
    margin:8,
    padding:6,
    borderRadius:6
},
img:{
  
        height:100,
        width:100,
        borderRadius:100/2,
        margin:10,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
}


})