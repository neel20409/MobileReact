import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
      title="Go to Details"
      onPress={() => navigation.push('Details', { productId: '12345' })}
 
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText:{
        color:'#000000'
    }

})