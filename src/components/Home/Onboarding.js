import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import slides from './slides'
import OnboardItem from './OnboardItem'
import Paginator from './Paginator'

const Onboarding = () => {
  return (
    <View>
      <FlatList 
      data={slides} 
      renderItem={({item}) => <OnboardItem item={item}/> } 
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      />
      <Paginator data={slides} />
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({})