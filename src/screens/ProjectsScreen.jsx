import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const projects = [
  {
    id: '1',
    title: 'AutoCrib Sales & Rentals',
    description: 'Web app for buying and renting cars.',
    stack: ['Java', 'Spring Boot', 'Vue.js'],
    link: 'https://github.com/yourusername/autocrib',
  },
  {
    id: '2',
    title: 'Shuttle Tracking App',
    description: 'Track shuttles in real-time using React Native and Node.js.',
    stack: ['React Native', 'Node.js'],
    link: 'https://github.com/yourusername/shuttle-tracker',
  },
  {
    id: '3',
    title: 'Salon Booking System',
    description: 'Online scheduling system for salons and clinics.',
    stack: ['Vue.js', 'Firebase'],
    link: 'https://github.com/yourusername/booking-system',
  },
];

export default function ProjectsScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => console.log('Open project:', item.title)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.stack}>{item.stack.join(' | ')}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Projects</Text>
      <FlatList
        data={projects}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#fff'
  },
  header: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 16
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4
  },
  title: {
    fontSize: 18, fontWeight: 'bold'
  },
  desc: {
    fontSize: 14, color: '#555', marginVertical: 4
  },
  stack: {
    fontSize: 12, color: '#888'
  }
});
