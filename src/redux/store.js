import { configureStore } from '@reduxjs/toolkit';
import tablesReducer from './tablesRedux';

const store = configureStore({
	reducer: {
		tables: tablesReducer,
	},
});

export default store;
