import { StyleSheet, Text, View,ScrollView,SafeAreaView, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

import * as Yup from 'yup'
import { Formik } from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
// import { ScrollView } from 'react-native/types_generated/index'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .typeError('Password length must be a number')
    .min(4,'Too Short!')
    .max(16,'Too Long!')
    .required('Required'),
})

export default function App() {
  const [password,setPassword]=useState('')
  const [isPassGenerated,setIsPassGenerated]=useState(false)
  const [lowercase,setLowercase]=useState(false)
  const [uppercase,setUppercase]=useState(false)
  const [numbers,setNumbers]=useState(false)
  const [symbols,setSymbols]=useState(false)
  
  // ... inside export default function App()
const genratePasswordString = (passwordLength:number)=>{
    // 1. Initialize as an empty string (FIX)
    let characterList = ''; 
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const numberschars = "0123456789";
    const symbolschars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if(uppercase){
        characterList+=uppercasechars
    }
    if(lowercase){  
        characterList+=lowercasechars
    }
    if(numbers){
        characterList+=numberschars
    }
    if(symbols){
        characterList+=symbolschars
    }

    // 2. Add validation for no options selected (IMPROVEMENT)
    if (characterList.length === 0) {
        setPassword('Select character types!');
        setIsPassGenerated(true);
        return; // Stop execution if no characters are selected
    }

    // 3. Update the character index calculation (IMPROVEMENT)
    const passwordresult = createPassword(characterList,passwordLength)
    setPassword(passwordresult)
    setIsPassGenerated(true)
}
// ...

  // ... inside export default function App()
const createPassword = (characters:string,passwordLength:number)=>{
    let result = ''
    for(let i = 0;i<passwordLength;i++ ){
        // FIX: Use Math.floor() to ensure the index is never equal to characters.length
        const characterindex = Math.floor(Math.random()*characters.length) 
        result+=characters.charAt(characterindex)
    }
    return result
}
// ...
  const resetPassword = ()=>{
    setPassword('')
    setIsPassGenerated(false)
    setLowercase(false)
    setUppercase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
  <ScrollView
  keyboardShouldPersistTaps='handled'
  >
    <View style={styles.appcontainer}>
      <View style={styles.formcontainer}>
        <Text style={styles.title}>Password Generator</Text>
         <Formik
       initialValues={{ passwordLength: '' }}
      validationSchema={PasswordSchema}
       onSubmit={values=>{
        genratePasswordString(Number(values.passwordLength))
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
         <>
         <View style={styles.inputwrapper}>
          <View style={styles.inputcolumn}>
            <Text style={styles.heading}>Password Length</Text>
            {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errorText}>
                {errors.passwordLength}
              </Text>
            )}
         
          </View>
             <TextInput 
            style={styles.inputstyles}
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder='Ex. 8'
            keyboardType='numeric'

            />
         </View>
         <View style={styles.inputwrapper}>
          <Text style={styles.heading}>Include lowercase </Text>
          <BouncyCheckbox
          useBuiltInState={false}
          isChecked={lowercase}
          onPress={() => setLowercase(!lowercase)}
          fillColor='#29ab87'
          />
         
         </View>
         <View style={styles.inputwrapper}>
          <Text style={styles.heading}>Include Uppercase </Text>
          <BouncyCheckbox
          useBuiltInState={false}
          isChecked={uppercase}
          onPress={() => setUppercase(!uppercase)}
          fillColor='#29ab87'
          />
         
         </View>
         <View style={styles.inputwrapper}>
          <Text style={styles.heading}>Include numbers </Text>
          <BouncyCheckbox
          useBuiltInState={false}
          isChecked={numbers}
          onPress={() => setNumbers(!numbers)}
          fillColor='#29ab87'
          />
         
         </View>
         <View style={styles.inputwrapper}>
          <Text style={styles.heading}>Include symbols </Text>
          <BouncyCheckbox
          useBuiltInState={false}
          isChecked={symbols}
          // text="Include symbols"
          onPress={() => setSymbols(!symbols)}
          fillColor='#29ab87'
          />
         
         </View>
        

         <View style={styles.formAction}>
          <TouchableOpacity
          disabled={!isValid}
          style={styles.button}
          onPress={handleSubmit }
          >
            <Text style={styles.buttonText}>Generate Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.secondaryButton}
          onPress={()=>{handleReset();resetPassword() }}
          >
            <Text>Reset</Text>
          </TouchableOpacity>
         </View>
         </>
       )}
     </Formik>
      </View>
      {isPassGenerated ? (
        <View style={styles.passwordArea}>
          <Text style={styles.passwordTitle}>Generated Password</Text>
          <Text selectable style={styles.passwordValue}>{password}</Text>
        </View>
      ):null}
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    backgroundColor: '#121212', // Very dark gray for the whole screen
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  formcontainer: {
    padding: 18,
    borderRadius: 10,
    backgroundColor: '#1E1E1E', // Slightly lighter dark gray for the form card
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#00D1FF', // Vibrant color for the main title
    textAlign: 'center',
    marginBottom: 25,
  },
  heading: {
    fontSize: 16,
    color: '#E0E0E0', // Light gray for general text
    fontWeight: '600',
    marginRight: 10,
  },
  inputwrapper: {
    flexDirection: 'row',
    color: '#E0E0E0',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 8,
  },
  inputcolumn: {
    flexDirection: 'column',
    flex: 1,
  },
  errorText: {
    fontSize: 12,
    color: '#FF4500', // Orange-red for errors
    marginTop: 5,
  },
  inputstyles: {
    width: 60,
    height: 40,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: '#2C2C2C', // Dark gray for input background
    color: '#FFFFFF', // White text for input
    fontSize: 16,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  formAction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#00D1FF', // Primary button color (vibrant)
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#121212', // Dark text on light button
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#3A3A3A', // Subtle background for the reset button
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#555555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordArea: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 5,
    borderLeftColor: '#00D1FF',
  },
  passwordTitle: {
    fontSize: 18,
    color: '#E0E0E0',
    fontWeight: '500',
    marginBottom: 10,
  },
  passwordValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4CAF50', // Green color to signify a successful generation
    padding: 10,
    backgroundColor: '#2C2C2C',
    borderRadius: 6,
    letterSpacing: 1.5,
  },

});