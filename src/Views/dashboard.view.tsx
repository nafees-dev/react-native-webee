import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import DrawerNavigator from '../Navigation/drawerNavigation';

const DashboardScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<DrawerNavigator />
		</SafeAreaView>
	);
};

export default DashboardScreen;




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