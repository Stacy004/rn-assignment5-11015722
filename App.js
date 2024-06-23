import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

// Create a Theme Context
const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const HomeScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const styles = createStyles(isDarkTheme);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile} >
        <View style={styles.pic}>
          <Image
          source={require('./assets/profile.png')} />
        </View>
        <View>
          <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Eric Atsu</Text>
        
        </View>
       
      </View>

      </View  >
      <View style={styles.card}>
      <Image
        source={require('./assets/Card.png')} 
       />
      </View>


      <View style={styles.actions}>
        <View style={styles.actionButton}>
        <View  style={styles.act}>
          <Image
          source={require('./assets/send.png')} />
          </View>
          <Text>Sent</Text>
        </View>
        <View style={styles.actionButton}>
          <View  style={styles.act}>
          <Image
          source={require('./assets/recieve.png')} />
          </View>
        
          <Text>Receive</Text>
        </View>
        <View style={styles.actionButton}>
        <View  style={styles.act}>
          <Image
          source={require('./assets/loan.png')} />
          </View>
          <Text>Loan</Text>
        </View>
        <View style={styles.actionButton}>
        <View  style={styles.act}>
          <Image
          source={require('./assets/topUp.png')} />
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
        <View  style={styles.act}>
          <Image style={styles.fact}
          source={require('./assets/apple.png')} />
          </View>
          <Text>Apple Store</Text>
          <Text>- $5.99</Text>
        </View>
        <View style={styles.transactionItem}>
        <View  style={styles.act}>
          <Image style={styles.fact}
          source={require('./assets/spotify.png')} />
          </View>
          <Text>Spotify</Text>
          <Text>- $12.99</Text>
        </View>
        <View style={styles.transactionItem}>
        <View  style={styles.act}>
          <Image style={styles.fact}
          source={require('./assets/moneyTransfer.png')} />
          </View>
          <Text>Money Transfer</Text>
          <Text>$300</Text>
        </View>
        <View style={styles.transactionItem}>
        <View  style={styles.act}>
          <Image style={styles.fact}
          source={require('./assets/grocery.png')} />
          </View>
          <Text>Grocery</Text>
          <Text>- $88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const MyCardsScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const styles = createStyles(isDarkTheme);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>My Cards Screen</Text>
    </View>
  );
};

const StatisticsScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const styles = createStyles(isDarkTheme);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Statistics Screen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const styles = createStyles(isDarkTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.settingsTitle}>Settings</Text>
      <TouchableOpacity style={styles.settingsItem}>
        <Text style={styles.text}>Language</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text style={styles.text}>My Profile</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text style={styles.text}>Contact Us</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text style={styles.text}>Change Password</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem}>
        <Text style={styles.text}>Privacy Policy</Text>
        <Ionicons name="chevron-forward" size={24} color="black" />
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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
          source={require('./assets/home.png')} />
              ),
            }}
          />
          <Tab.Screen 
            name="My Cards" 
            component={MyCardsScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
          source={require('./assets/myCards.png')} />
              ),
            }}
          />
          <Tab.Screen 
            name="Statistics" 
            component={StatisticsScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
          source={require('./assets/statictics.png')} />
              ),
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                source={require('./assets/settings.png')} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const createStyles = (isDarkTheme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: isDarkTheme ? '#121212' : '#ffffff',
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isDarkTheme ? '#121212' : '#ffffff',
  },
  text: {
    color: isDarkTheme ? '#ffffff' : '#000000',
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: isDarkTheme ? '#ffffff' : '#000000',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profile:{
    flexDirection: 'row',
  },
  pic:{
    marginRight: 20,
    height: 40,
    width: 50,
  },
  card:{
    marginBottom: 30,
  },
  act:{
    backgroundColor: '#B2BEB5',
    height: 50,
    width: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  transact:{
    flexDirection:'row',
    marginBottom: 10,
  },
transactTitle:{
  marginLeft: 180,
  color: 'blue',
},
fact:{
  height: 15,
  width:15,
}
 
});
