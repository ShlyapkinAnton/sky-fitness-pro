import { configureStore } from '@reduxjs/toolkit';
import { coursesQuery } from '../serviceQuery/courses';
import coursesSlice from './slices/courses';
import authSlice from './slices/auth';

export const store = configureStore({
    reducer: {
        courses: coursesSlice,
        auth: authSlice,
        [coursesQuery.reducerPath]: coursesQuery.reducer,
    },
  
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(coursesQuery.middleware)
  })