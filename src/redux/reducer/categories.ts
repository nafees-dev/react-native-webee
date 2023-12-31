import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../../commonInterfaces';

export interface CategoriesState {
  list: Array<ICategory>;
}

const initialState: CategoriesState = {
  list: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<any>) => {
      state.list.push(action.payload);
    },

    updateCategory: (state, action: PayloadAction<any>) => {
      const { itemIndex, item } = action.payload;
      state.list = state.list.map((category, i) => i === itemIndex ? item : category);
    },

    deleteCategory: (state, action: PayloadAction<any>) => {
      const index = action.payload;
      state.list = state.list.filter((_, i) => i !== index);
    },

    deleteCategoryField: (state, action: PayloadAction<{ objectIndex: number; fieldIndex: number }>) => {
      const { objectIndex, fieldIndex } = action.payload;
      state.list[objectIndex].fields.splice(fieldIndex, 1);
    },

    updateFieldValue: (state: any, action: PayloadAction<any>) => {
      const { fieldIndex, itemIndex, value } = action.payload;
      const newCategories = [...state.list];

      if (newCategories[itemIndex] && newCategories[itemIndex].fields) {
        newCategories[itemIndex].fields[fieldIndex].label = value;
      }

      state.list = newCategories;
    },
  },
})

export const { addCategory, updateCategory, deleteCategory, deleteCategoryField, updateFieldValue } = categoriesSlice.actions;

export default categoriesSlice.reducer;
