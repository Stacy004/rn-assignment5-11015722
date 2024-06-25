import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from './ThemeContext';
import createStyles from './styles';

const MyCardsScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const styles = createStyles(isDarkTheme);
  

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>My Cards Screen</Text>
    </View>

  );
};




export default MyCardsScreen;
