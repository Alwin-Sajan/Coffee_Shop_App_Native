import { StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
        <Text>Settings content goes here</Text>
        <View style={styles.innerprofile}>
            <Text style={styles.proflieText}>Arun R K</Text>
            <Text style={styles.proflieText}>Joined on 26 April 25</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 30,
    },
    innerprofile:{
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 20,
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 20,
    },
    proflieText:{
        fontSize: 18,
        color: '#333',
    }

    
});