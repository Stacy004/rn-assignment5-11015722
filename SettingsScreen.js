// SettingsScreen.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from './ThemeContext';

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme, theme } = useContext(ThemeContext);
  const styles = createStyles(isDarkTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.settingsTitle}>Settings</Text>
      <TouchableOpacity style={styles.settingsItem}>
        <Text style={styles.text}>Language</Text>
        <Image style={styles.fact} source={require('./assets/gThan.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text style={styles.text}>My Profile</Text>
        <Image style={styles.fact} source={require('./assets/gThan.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text style={styles.text}>Contact Us</Text>
        <Image style={styles.fact} source={require('./assets/gThan.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text style={styles.text}>Change Password</Text>
        <Image style={styles.fact} source={require('./assets/gThan.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text style={styles.text}>Privacy Policy</Text>
        <Image style={styles.fact} source={require('./assets/gThan.png')} />
      </TouchableOpacity>
      <View style={styles.settingsItem}>
        <Text style={styles.text}>Theme</Text>
        <View style={styles.et} >
        <Switch
          trackColor={{ false: "#767577", true: "#19cf6e" }}
          thumbColor={isDarkTheme ? "#ffffff" : "#f4f3f4"}
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
        </View>
       
      </View>
    </View>
  );
};

const createStyles = (isDarkTheme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: isDarkTheme ? '#08102b' : '#ffffff',
  },
  settingsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 70,
    textAlign: 'center',
    color: isDarkTheme ? '#ffffff' : '#000000',
    marginTop: 50,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    color: isDarkTheme ? '#ffffff' : '#000000',
  },
  fact: {
    height: 15,
    width: 15,
    tintColor: isDarkTheme ? '#ffffff' : '#000000',
   
  },
  et: {
    width: '80%',
    height: 30,
    justifyContent: 'center',
   
  },
  switch: {
    transform: [{ scaleX: 4 }, { scaleY: 4 }],
  },
});

export default SettingsScreen;
