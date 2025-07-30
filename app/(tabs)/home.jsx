import iceCoffeeImg from '@/assets/images/iced-coffee.png';

import place1 from '@/assets/images/restaurants/place1.png';
import place2 from '@/assets/images/restaurants/place2.png';
import place3 from '@/assets/images/restaurants/place3.png';
import place4 from '@/assets/images/restaurants/place4.png';


import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const HomeScreen = () => {


  const PlaceData = [
    {
      id: 1,
      name: 'Santorini, Greece',
      description: 'A stunning island known for its white-washed buildings and beautiful sunsets over the Aegean Sea.',
      image: place4
    },
    {
      id: 2,
      name: 'Kyoto, Japan',
      description: 'Historic city with ancient temples, vibrant cherry blossoms, and traditional geisha culture.',
      image: place2
    },
    {
      id: 3,
      name: 'Banff, Canada',
      description: 'A breathtaking mountain town surrounded by turquoise lakes and the Canadian Rockies.',
      image: place3
    },
    {
      id: 4,
      name: 'Marrakech, Morocco',
      description: 'A vibrant city filled with colorful souks, spices, palaces, and rich cultural heritage.',
      image: place1
    }
  ];


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >

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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {Object.values(PlaceData).map((place, index) => (
            <View key={place.id || index} style={styles.placeCard}>
              <Image source={place.image} style={styles.placeImage} resizeMode="cover" />
              <View style={styles.cardContent}>
                <Text style={styles.placeTitle}>{place.name}</Text>
                <Text style={styles.placeDesc}>
                  {place.description.length > 32
                    ? `${place.description.slice(0, 32)}...`
                    : place.description}
                </Text>
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

          {Object.values(PlaceData).slice(2).map((place, index) => (
            <View key={index} style={styles.popularCard}>
              <Image style={styles.popularImage} source={iceCoffeeImg} />
              <View style={styles.popularContent}>
                <Text style={styles.placeTitle}>{place.name}</Text>
                <Text style={styles.placeDesc}>{place.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Popular Places */}
        <View>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Coffee drinks</Text>
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

        <Text style={styles.footerText}>Coffee Guard</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
  footerText:{
    fontSize: 28,
    marginTop: 36,
    textAlign: 'center',
    fontWeight: 'black',
    color: '#007AFF',
    marginBottom: 20,
  }
});
