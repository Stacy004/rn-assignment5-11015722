import { StyleSheet } from 'react-native';

const createStyles = (isDarkTheme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: isDarkTheme ? '#1#131e4a' : '#ffffff',
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
    backgroundColor: '#E5E4E2',
    height: 50,
    width: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center', 
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
  }
});

export default createStyles;
