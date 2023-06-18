// App.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ResourceScreen from '../Views/resources.view';
import CategoriesScreen from '../Views/categories.view';

// Create the drawer navigator
const Drawer = createDrawerNavigator();

// Custom drawer content component
const CustomDrawerContent = (props: any) => {
	return (
		<DrawerContentScrollView {...props}>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
};

const DrawerNavigator = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
				<Drawer.Screen name="Categories" component={CategoriesScreen} />
				<Drawer.Screen name="Home" component={ResourceScreen} />
				<Drawer.Screen name="Profile" component={ResourceScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default DrawerNavigator;