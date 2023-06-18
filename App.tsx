// App.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import DashboardScreen from './src/Views/dashboard.view';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store}>
      <DashboardScreen/>
    </Provider>
  );
};

const styles = StyleSheet.create({
  statusHeader: {
    backgroundColor: 'lightblue',
    padding: 16,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
