import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const skills = [
  'Java', 'Kotlin', 'React Native', 'Node.js',
  'Vue.js', 'Firebase', 'HTML', 'CSS', 'SQL', 'MongoDB',
];

export default function SkillsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      <View style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillBadge}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#fff',
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillBadge: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 4,
  },
  skillText: {
    fontSize: 14,
    color: '#333',
  },
});
