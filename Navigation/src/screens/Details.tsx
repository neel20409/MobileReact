import { Button, StyleSheet, Text, View } from 'react-native'
import React, { use } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route }: Props) => {
  const { productId } = route.params;


  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details for Product ID: {productId}</Text>
      <Button
      title='Go to Home'
      onPress={()=>navigation.popToTop()}
      >
        
      </Button>
    </View>
  )
}

export default Details

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