import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from './ThemeContext';
import createStyles from './styles';

const StatisticsScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const styles = createStyles(isDarkTheme);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Statistics Screen</Text>
    </View>
  );
};

export default StatisticsScreen;
