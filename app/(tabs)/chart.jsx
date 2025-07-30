import { StyleSheet, Text, View } from 'react-native';

export default function ChartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charts go here</Text>
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
})