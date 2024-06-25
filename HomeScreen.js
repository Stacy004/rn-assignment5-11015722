// HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from './ThemeContext';

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
            <Image source={require('./assets/send.png')} style={styles.icon} />
          </View>
          <Text style={styles.text}>Sent</Text>
        </View>
        <View style={styles.actionButton}>
          <View style={styles.act}>
            <Image source={require('./assets/recieve.png')} style={styles.icon} />
          </View>
          <Text style={styles.text}>Receive</Text>
        </View>
        <View style={styles.actionButton}>
          <View style={styles.act}>
            <Image source={require('./assets/loan.png')} style={styles.icon} />
          </View>
          <Text style={styles.text}>Loan</Text>
        </View>
        <View style={styles.actionButton}>
          <View style={styles.act}>
            <Image source={require('./assets/topUp.png')} style={styles.icon} />
          </View>
          <Text style={styles.text}>Topup</Text>
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
              <Image style={styles.tact} source={require('./assets/apple.png')} />
            </View>
            <View style={styles.fit}>
              <Text style={styles.text}>Apple Store</Text>
              <Text style={styles.weight}>Entertainment</Text>
            </View>
          </View>
          <Text style={styles.text}>- $5.99</Text>
        </View>
        <View style={styles.transactionItem}>
          <View style={styles.activity}>
            <View style={styles.act}>
              <Image style={styles.fact} source={require('./assets/spotify.png')} />
            </View>
            <View style={styles.fit}>
              <Text style={styles.text}>Spotify</Text>
              <Text style={styles.weight}>Music</Text>
            </View>
          </View>
          <Text style={styles.text}>- $12.99</Text>
        </View>
        <View style={styles.transactionItem}>
          <View style={styles.activity}>
            <View style={styles.act}>
              <Image style={styles.tact} source={require('./assets/moneyTransfer.png')} />
            </View>
            <View style={styles.fit}>
              <Text style={styles.text}>Money Transfer</Text>
              <Text style={styles.weight}>Transaction</Text>
            </View>
          </View>
          <Text style={styles.tet}> $300</Text>
        </View>
        <View style={styles.transactionItem}>
          <View style={styles.activity}>
            <View style={styles.act}>
              <Image style={styles.fact} source={require('./assets/grocery.png')} />
            </View>
            <View style={styles.fit}>
              <Text style={styles.text}>Grocery</Text>
              <Text style={styles.weight}>Transaction</Text>
            </View>
          </View>
          <Text style={styles.text}>- $88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const createStyles = (isDarkTheme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: isDarkTheme ? '#08102b' : '#ffffff',
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: isDarkTheme ? '#aaa' : '#555',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: isDarkTheme ? '#ffffff' : '#000000',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  transactions: {
    marginBottom: 20,
    marginTop: 10,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: isDarkTheme ? '#ffffff' : '#000000',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: isDarkTheme ? '#ffffff' : '#000000',
  },
  profile: {
    flexDirection: 'row',
    marginTop: 50,
  },
  pic: {
    marginRight: 20,
    height: 40,
    width: 50,
  },
  card: {
    marginBottom: 30,
  },
  act: {
    backgroundColor: isDarkTheme ? '#222f59' : '#E5E4E2',
    height: 50,
    width: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    tintColor: isDarkTheme ? '#ffffff' : '#000000',
  },
  transact: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  transactTitle: {
    marginLeft: 180,
    color: 'blue',
  },
  fact: {
    height: 15,
    width: 15,
  },
  activity: {
    flexDirection: 'row',
  },
  weight: {
    marginTop: 5,
    color: '#888888',
  },
  fit: {
    marginLeft: 20,
  },
  search: {
    marginLeft: 100,
    height: 40,
    width: 40,
    backgroundColor: '#E5E4E2',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  truth: {
    height: 25,
    width: 25,
  },
  text: {
    color: isDarkTheme ? '#ffffff' : '#000000',
  },
  tet: {
    color: 'blue',
  },
  tact:{
    height: 15,
    width: 15,
    tintColor: isDarkTheme ? '#ffffff' : '#000000',
  }
});

export default HomeScreen;
