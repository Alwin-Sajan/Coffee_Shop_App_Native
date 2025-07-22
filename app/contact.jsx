import americano from "@/assets/images/menu/americano.png";
import { Colors } from '@/constants/Colors';
import React from 'react';
import { Appearance, Image, StyleSheet, Text, View } from 'react-native';
// @/assets/images/menu/americano.png
const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;



const contact = () => {
  return (
    <View style={styles.container}>
      <Image source={americano} style={{ width: "100%", height: "50%", alignSelf: 'center' }}
      />
      <Text style={styles.title}>Coffee Shop</Text>
      <View style={styles.seperator} />
      <View>
        <Text style={styles.text}>Contact Information</Text>
        <Text style={styles.text}>Email: coffeeShop@gmail.com</Text>
        <Text style={styles.text}>Phone: +123 456 7890</Text>
        <Text style={styles.text}>Address: 123 Coffee St, Brew City</Text>
      </View>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 32,
    // textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  seperator: {
    height: 1,
    backgroundColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
    width: '100%',
    // maxWidth: 300,
    marginHorizontal: 'auto',
    marginBottom: 10,

  },
  text: {
    color: theme.text,
    fontSize: 18,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
})