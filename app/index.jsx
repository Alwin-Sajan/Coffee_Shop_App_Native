import iceCoffeeImg from "@/assets/images/iced-coffee.png"
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={iceCoffeeImg}
      resizeMode='cover'
      style={styles.image}
      
      >
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    // marginTop: 50,
  },
  image:{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
})

export default app