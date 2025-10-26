import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import Action from './components/Action'
import ContactList from './components/ContactList'
import WatsStatus from './components/WatsStatus'



function App () {
  return (
    <SafeAreaView>
      <ScrollView>
       
          <FlatCard/>

          <ElevatedCards/>

          <FancyCards/>
          <Action/>
          <WatsStatus/>
          <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App