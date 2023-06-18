// import { createStore } from 'redux';
// import rootReducer from './reducer';
// const store = createStore(rootReducer);

// export default store;


import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer  from './reducer/categories'

export const store: any = configureStore({
  reducer: {
    categories: categoriesReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch