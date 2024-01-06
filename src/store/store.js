import { configureStore } from '@reduxjs/toolkit';
import { coursesQuery } from '../serviceQuery/courses';
import coursesSlice from './slices/courses';

export const store = configureStore({
    reducer: {
        courses: coursesSlice,
        [coursesQuery.reducerPath]: coursesQuery.reducer,
    },
  
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(coursesQuery.middleware)
  })