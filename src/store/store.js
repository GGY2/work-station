import { configureStore } from '@reduxjs/toolkit';
import officesReducer from '../features/officesSlice';

export const store = configureStore({
    reducer: {
        offices: officesReducer
    },
});