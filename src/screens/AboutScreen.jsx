import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, Button } from 'react-native';

export default function AboutScreen() {
  const handleResumeDownload = () => {
    Linking.openURL('https://your-resume-link.com'); // Replace with actual URL
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/icon.png')} // Add your photo in assets folder
        style={styles.avatar}
      />
      <Text style={styles.name}>Zwivhuya Mathada</Text>
      <Text style={styles.title}>Full Stack Developer</Text>

      <Text style={styles.bio}>
        I'm a passionate developer with experience in building modern web and mobile apps.
        I love working with React Native, Java, python, Kotlin, and Vue.js. 
        Always learning and always building. I have experience in database design and data science.
      </Text>

      <Button title="Download Resume" onPress={handleResumeDownload} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
