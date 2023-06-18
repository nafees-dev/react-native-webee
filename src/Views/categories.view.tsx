import React from 'react';
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native';
import { setCategories } from '../redux/actions';
import { connect } from 'react-redux';
import { FAB } from 'react-native-paper';
import CustomCard from '../Components/Cards';
import { ICategory } from '../commonInterfaces';
import { useSelector, useDispatch } from 'react-redux'
import { addCategory } from '../redux/reducer/categories';
import { RootState } from "../redux/store"

const CategoriesScreen = () => {

	const categories = useSelector((state: RootState) => state.categories?.list)
  const dispatch = useDispatch()


	const CustomButton = ({ onPress, title }: any) => {
		return (
			<TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
				<Text style={styles.buttonText}>{title}</Text>
			</TouchableOpacity>
		);
	};

	const handleAddButtonPress = () => {
		const newCategory: ICategory = {
			id: categories?.length + 1,
			name: 'New Category',
			fields: [{value: 'New Field', type: 'text', label: '' }],
		}
		console.log("testng====")
		dispatch(addCategory(newCategory));
  };

	const onDeleteField = (fieldIndex: number, objectIndex: number) => {
		if (categories[objectIndex] && categories[objectIndex].fields[fieldIndex]) {
			categories[objectIndex].fields.splice(fieldIndex, 1);
		}
	}

	const addFields = (fieldIndex: number, objectIndex: number) => {

	}
	
	const isCategoryExist = categories?.length === 0

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FAB icon="plus" style={styles.fab} onPress={handleAddButtonPress}/>

			{isCategoryExist && 
				<View style={styles.screenContainer}>
					<Text style={styles.emptyText} >No Categories Found!</Text>
				</View>
			}

			{!isCategoryExist &&
				<View>
					{categories.map((item: ICategory, index: number)=>(
						<CustomCard item={item} onDeleteField={onDeleteField} itemIndex={index} />
					))}
				</View>
			}
		</SafeAreaView>
	);
};


export default CategoriesScreen;



const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	emptyText: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
		borderRadius: 50,
		fontWeight: "bold",
		backgroundColor: '#67bf88'
  },
	button: {
    backgroundColor: 'lightgreen',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
