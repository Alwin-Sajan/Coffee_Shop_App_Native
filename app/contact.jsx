import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const contact = () => {
  return (
    <View>
      <Text style={styles.title}>Contact Us</Text>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  }
})