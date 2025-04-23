import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Location from 'expo-location';
import { useTheme } from '../context/ThemeContext';

export default function HomeScreen({ navigation }) {
  const { colors, toggleTheme, theme } = useTheme();
  const [greeting, setGreeting] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const dateString = now.toDateString();

    setCurrentDate(dateString);

    if (hours < 12) setGreeting('Good Morning');
    else if (hours < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const cityRes = await Location.reverseGeocodeAsync({ latitude, longitude });
      const cityName = cityRes[0]?.city || 'Your City';
      setCity(cityName);

      // Open-Meteo API (no API key required)
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const data = await weatherRes.json();
      setWeather(data.current_weather?.temperature); // Using temperature from Open-Meteo
    } catch (error) {
      console.log('Weather fetch failed:', error);
    }
  };

  const handleNavigate = (screen) => navigation.navigate(screen);

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      {/* Greeting Section */}
      <View style={styles.greetingSection}>
        <Text style={[styles.greetingText, { color: colors.text }]}>
          {greeting}, Zwivhuya 👋
        </Text>
        <Text style={[styles.dateText, { color: colors.text }]}>
          {currentDate}
        </Text>
        {weather !== null && (
          <Text style={[styles.weatherText, { color: colors.text }]}>
            🌤 {weather}°C in {city}
          </Text>
        )}
      </View>

      {/* Profile */}
      <Image source={require('../../assets/Zwivhu.png')} style={styles.profilePic} />
      <Text style={[styles.name, { color: colors.text }]}>Zwivhuya Mathada</Text>
      <Text style={[styles.subtitle, { color: colors.text }]}>Full Stack Developer</Text>

      {/* Menu */}
      <View style={styles.menu}>
        <TouchableOpacity style={[styles.menuButton, { backgroundColor: colors.card }]} onPress={() => handleNavigate('About')}>
          <Text style={[styles.menuText, { color: colors.text }]}>👤 About Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, { backgroundColor: colors.card }]} onPress={() => handleNavigate('Projects')}>
          <Text style={[styles.menuText, { color: colors.text }]}>🧑‍💻 Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, { backgroundColor: colors.card }]} onPress={() => handleNavigate('Skills')}>
          <Text style={[styles.menuText, { color: colors.text }]}>🛠️ Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, { backgroundColor: colors.card }]} onPress={() => handleNavigate('Contact')}>
          <Text style={[styles.menuText, { color: colors.text }]}>📬 Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Theme Switch */}
      <TouchableOpacity onPress={toggleTheme} style={{ marginTop: 24 }}>
        <Text style={{ color: colors.accent }}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: colors.text }]}>
          © {new Date().getFullYear()} Zwivhuya Mathada • Made with ❤️
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
  },
  greetingSection: {
    alignItems: 'center',
    marginBottom: 16,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: '600',
  },
  dateText: {
    fontSize: 14,
    color: '#888',
  },
  weatherText: {
    fontSize: 14,
    marginTop: 4,
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
  },
  menu: {
    width: '100%',
    gap: 12,
  },
  menuButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});
