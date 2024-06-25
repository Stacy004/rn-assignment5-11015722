import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import { ThemeContext } from './ThemeContext';
import createStyles from './styles';

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
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
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
