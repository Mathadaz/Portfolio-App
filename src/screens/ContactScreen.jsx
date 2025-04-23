import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function ContactScreen() {
  const handleLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Connect</Text>

      <TouchableOpacity onPress={() => handleLink('mailto:zwivhuyamathada@email.com')}>
        <Text style={styles.link}>📧 Email</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleLink('https://github.com/yourusername')}>
        <Text style={styles.link}>💻 GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleLink('https://linkedin.com/in/yourprofile')}>
        <Text style={styles.link}>🔗 LinkedIn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20,
  },
  link: {
    fontSize: 18, marginVertical: 10, color: '#007bff',
  },
});
