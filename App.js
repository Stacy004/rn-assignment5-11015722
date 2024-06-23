import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.welcomeText}>Welcome back,</Text>
      <Text style={styles.userName}>Eric Atsu</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
      <Text style={styles.cardHolder}>AR Jonson</Text>
      <Text style={styles.cardExpiry}>24/2000</Text>
      <Text style={styles.cardCVV}>6986</Text>
      <Text style={styles.cardType}>Mastercard</Text>
    </View>
    <View style={styles.actions}>
      <View style={styles.actionButton}>
        <Ionicons name="arrow-up" size={24} color="black" />
        <Text>Sent</Text>
      </View>
      <View style={styles.actionButton}>
        <Ionicons name="arrow-down" size={24} color="black" />
        <Text>Receive</Text>
      </View>
      <View style={styles.actionButton}>
        <Ionicons name="cash" size={24} color="black" />
        <Text>Loan</Text>
      </View>
      <View style={styles.actionButton}>
        <Ionicons name="add-circle" size={24} color="black" />
        <Text>Topup</Text>
      </View>
    </View>
    <View style={styles.transactions}>
      <Text style={styles.transactionTitle}>Transaction</Text>
      <View style={styles.transactionItem}>
        <FontAwesome name="apple" size={24} color="black" />
        <Text>Apple Store</Text>
        <Text>- $5.99</Text>
      </View>
      <View style={styles.transactionItem}>
        <FontAwesome name="spotify" size={24} color="black" />
        <Text>Spotify</Text>
        <Text>- $12.99</Text>
      </View>
      <View style={styles.transactionItem}>
        <Ionicons name="swap-horizontal" size={24} color="black" />
        <Text>Money Transfer</Text>
        <Text>$300</Text>
      </View>
      <View style={styles.transactionItem}>
        <Ionicons name="cart" size={24} color="black" />
        <Text>Grocery</Text>
        <Text>- $88</Text>
      </View>
    </View>
  </ScrollView>
);

const MyCardsScreen = () => (
  <View style={styles.screen}>
    <Text>My Cards Screen</Text>
  </View>
);

const StatisticsScreen = () => (
  <View style={styles.screen}>
    <Text>Statistics Screen</Text>
  </View>
);

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.settingsTitle}>Settings</Text>
      <TouchableOpacity style={styles.settingsItem}>
        <Text>Language</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text>My Profile</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text>Contact Us</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text>Change Password</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text>Privacy Policy</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.settingsItem}>
        <Text>Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="My Cards" 
          component={MyCardsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="card" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Statistics" 
          component={StatisticsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="stats-chart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: '#aaa',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardNumber: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  cardHolder: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 5,
  },
  cardExpiry: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 5,
  },
  cardCVV: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 10,
  },
  cardType: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'right',
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
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
