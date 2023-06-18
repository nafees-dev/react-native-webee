import { Draft, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICategory } from '../../commonInterfaces';

export interface CategoriesState {
  list: Array<ICategory>;
}

const initialState: CategoriesState = {
  list: [],
}

export const categoriesSlice = createSlice({
  name: 'categoriesList',
  initialState,
  reducers: {
    addCategory: (state: any, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
        state.list.push(action.payload);

    },
  },
})

// Action creators are generated for each case reducer function
export const { addCategory } = categoriesSlice.actions

export default categoriesSlice.reducer