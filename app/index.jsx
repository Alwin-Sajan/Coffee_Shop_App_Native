import cofffe from '@/assets/images/coffee.png';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const index = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>

            <Image source={cofffe} style={styles.mainImage} />
            <Text style={styles.title}>Coffee Guard</Text>
           <Pressable onPress={() => router.push('/home')}> 
                <Text style={styles.button}>Get Started</Text>
            </Pressable>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    title: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 100,
    },
    mainImage: {
        width: '100%',
        height: 500,
        marginTop: 20,
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 30,
        width: '50%',
        fontSize: 18,
        alignSelf: 'center',
    }
});