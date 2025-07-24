import iceCoffeeImg from "@/assets/images/iced-coffee.png"
import { Link } from "@react-navigation/native"
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={iceCoffeeImg}
        resizeMode='cover'
        style={styles.image}

      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/menu" style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Our Menu
            </Text>
          </Pressable>
        </Link>
        <Link href="/contact" style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Contact Us
            </Text>
          </Pressable>
        </Link>

      </ImageBackground>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // marginTop: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 120,
  },
  button:{
    height:60,
    width: 150,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    padding:6,
    marginBottom:50,

  }
  ,
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 4,
  },
})

export default app