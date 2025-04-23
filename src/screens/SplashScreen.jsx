import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // 2 seconds splash
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>👨‍💻 Zwivhuya Mathada Portfolio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'
  },
  logo: {
    fontSize: 24, color: '#fff', fontWeight: 'bold'
  }
});
