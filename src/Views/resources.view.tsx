import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const ResourceScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screenContainer}>
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ResourceScreen;

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