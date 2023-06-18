import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { setCategories } from '../redux/actions';
import { FAB } from 'react-native-paper';
import CustomCard from '../Components/Cards';
import { ICategory } from '../commonInterfaces';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory, deleteCategory, deleteCategoryField, updateCategory } from '../redux/reducer/categories';
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
      fields: [{ value: 'New Field', type: 'text', label: '' }],
    }
    dispatch(addCategory(newCategory));
  };

  const onDeleteField = (fieldIndex: number, objectIndex: number) => {
    if (categories[objectIndex] && categories[objectIndex].fields[fieldIndex]) {
      dispatch(deleteCategoryField({objectIndex, fieldIndex}));
    }
  }

  const onAddField = (objectIndex: number, type: 'text' | 'number' | 'date' | 'checkbox') => {
		const newCategory: Array<ICategory> = JSON.parse(JSON.stringify(categories));
    const fields = { value: '', type, label: '' }
    newCategory[objectIndex].fields.push(fields);
		dispatch(updateCategory({item: newCategory[objectIndex], itemIndex: objectIndex}));
  }

  const isCategoryExist = categories?.length === 0

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.fabContainer}>
        <FAB icon="plus" style={styles.fab} onPress={handleAddButtonPress} />
      </View>

      {isCategoryExist &&
        <View style={styles.screenContainer}>
          <Text style={styles.emptyText}>No Categories Found!</Text>
        </View>
      }

      {!isCategoryExist &&
        <View>
          {categories.map((item: ICategory, index: number) => (
            <CustomCard key={index} item={item} onDeleteField={onDeleteField} itemIndex={index} onAddField={onAddField} />
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
  fabContainer: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    zIndex: 1, // Set a higher zIndex to ensure it is above other components
  },
  fab: {
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
