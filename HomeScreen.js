import React, { useContext } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { ThemeContext } from './ThemeContext';
import createStyles from './styles';

const HomeScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const styles = createStyles(isDarkTheme);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.pic}>
          <Image source={require('./assets/profile.png')} />
        </View>
        <View>
          <View style={styles.header}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.userName}>Eric Atsu</Text>
          </View>
        </View>
        <View style={styles.search}>
          <Image style={styles.truth} source={require('./assets/search.png')} />
        </View>
      </View>
      <View style={styles.card}>
        <Image source={require('./assets/Card.png')} />
      </View>

      <View style={styles.actions}>
        <View style={styles.actionButton}>
          <View style={styles.act}>
            <Image source={require('./assets/send.png')} />
          </View>
          <Text>Sent</Text>
        </View>
        <View style={styles.actionButton}>
          <View style={styles.act}>
            <Image source={require('./assets/recieve.png')} />
          </View>
          <Text>Receive</Text>
        </View>
        <View style={styles.actionButton}>
          <View style={styles.act}>
            <Image source={require('./assets/loan.png')} />
          </View>
          <Text>Loan</Text>
        </View>
        <View style={styles.actionButton}>
          <View style={styles.act}>
            <Image source={require('./assets/topUp.png')} />
          </View>
          <Text>Topup</Text>
        </View>
      </View>
      <View style={styles.transactions}>
        <View style={styles.transact}>
          <Text style={styles.transactionTitle}>Transaction</Text>
          <Text style={styles.transactTitle}>See All </Text>
        </View>

        <View style={styles.transactionItem}>
          <View style={styles.activity}>
            <View style={styles.act}>
              <Image style={styles.fact} source={require('./assets/apple.png')} />
            </View>
            <View style={styles.fit}>
              <Text>Apple Store</Text>
              <Text style={styles.weight}>Entertainment</Text>
            </View>
          </View>
          <Text>- $5.99</Text>
        </View>

        <View style={styles.transactionItem}>
          <View style={styles.activity}>
            <View style={styles.act}>
              <Image style={styles.fact} source={require('./assets/spotify.png')} />
            </View>
            <View style={styles.fit}>
              <Text>Spotify</Text>
              <Text style={styles.weight}>Music</Text>
            </View>
          </View>
          <Text>- $12.99</Text>
        </View>
        <View style={styles.transactionItem}>
          <View style={styles.activity}>
            <View style={styles.act}>
              <Image style={styles.fact} source={require('./assets/moneyTransfer.png')} />
            </View>
            <View style={styles.fit}>
              <Text>Money Transfer</Text>
              <Text style={styles.weight}>Transaction</Text>
            </View>
          </View>
          <Text> $300</Text>
        </View>
        <View style={styles.transactionItem}>
          <View style={styles.activity}>
            <View style={styles.act}>
              <Image style={styles.fact} source={require('./assets/grocery.png')} />
            </View>
            <View style={styles.fit}>
              <Text>Grocery</Text>
              <Text style={styles.weight}>Transaction</Text>
            </View>
          </View>
          <Text>- $88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
