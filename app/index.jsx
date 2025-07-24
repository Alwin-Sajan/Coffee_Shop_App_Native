import iceCoffeeImg from '@/assets/images/iced-coffee.png';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:50}}>

        {/* Header */}
        <View style={styles.row}>
          <Text style={styles.title}>Enjoy your morning Coffee</Text>
          <Image style={styles.avatar} source={iceCoffeeImg} resizeMode='cover' />
        </View>

        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search for coffee..."
          placeholderTextColor="#555"
        />

        {/* Nearby Places */}
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Nearby Places</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
          {['Place 1', 'Place 2', 'Place 3'].map((place, index) => (
            <View key={index} style={styles.placeCard}>
              <Image source={iceCoffeeImg} style={styles.placeImage} />
              <View style={styles.cardContent}>
                <Text style={styles.placeTitle}>{place}</Text>
                <Text style={styles.placeDesc}>Description of {place}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Popular Places */}
        <View>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Popular Places</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>

          {[1, 2].map((_, index) => (
            <View key={index} style={styles.popularCard}>
              <Image style={styles.popularImage} source={iceCoffeeImg} />
              <View style={styles.popularContent}>
                <Text style={styles.placeTitle}>Popular Place {index + 1}</Text>
                <Text style={styles.placeDesc}>Description of Popular Place</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Popular Places */}
        <View>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Popular Places</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>

          {[1, 2].map((_, index) => (
            <View key={index} style={styles.popularCard}>
              <Image style={styles.popularImage} source={iceCoffeeImg} />
              <View style={styles.popularContent}>
                <Text style={styles.placeTitle}>Popular Place {index + 1}</Text>
                <Text style={styles.placeDesc}>Description of Popular Place</Text>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  title: {
    width: '75%',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'lightgray',
  },
  searchBar: {
    height: 56,
    backgroundColor: '#f2f2f2',
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  seeAll: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },
  horizontalScroll: {
    paddingBottom: 10,
  },
  placeCard: {
    width: 260,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginRight: 20,
    overflow: 'hidden',
    elevation: 2,
  },
  placeImage: {
    width: '100%',
    height: 160,
  },
  cardContent: {
    padding: 12,
  },
  placeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  placeDesc: {
    fontSize: 14,
    color: '#666',
  },
  popularCard: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
  },
  popularImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  popularContent: {
    flex: 1,
    paddingLeft: 12,
  },
});
