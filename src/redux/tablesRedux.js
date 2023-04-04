import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../config';

export const getTableById = ({ tables }, tableId) => {
	return tables.find((table) => table.id === tableId);
};

export const getAllTables = ({ tables }) => {
	return tables;
};

export const updateTablesRequest = () => {
	return async (dispatch) => {
		try {
			const res = await fetch(`${API_URL}/tables`);
			const tables = await res.json();
			await dispatch(fetchTables(tables));
		} catch (err) {
			console.error(err);
		}
	};
};

export const addTableRequest = (newTable) => {
	return async (dispatch) => {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTable),
		};
		try {
			await fetch(`${API_URL}/tables`, options);
			await dispatch(addTable(newTable));
		} catch (err) {
			console.error(err);
		}
	};
};

export const removeTableRequest = (id) => {
	return async (dispatch) => {
		const options = {
			method: 'DELETE',
		};
		try {
			await fetch(`${API_URL}/tables/${id}`, options);
			await dispatch(removeTable(id));
		} catch (err) {
			console.error(err);
		}
	};
};

export const updateTableRequest = (updatedTable) => {
	return async (dispatch) => {
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedTable),
		};
		try {
			await fetch(`${API_URL}/tables/${updatedTable.id}`, options);
			await dispatch(updateTable(updatedTable));
		} catch (err) {
			console.error(err);
		}
	};
};

export const tablesSlice = createSlice({
	name: 'tables',
	initialState: { tables: [] },
	reducers: {
		fetchTables: (state, action) => {
			state.tables = [...action.payload];
		},
		updateTable: (state, action) => {
			let updatedTable = state.tables.find(
				(table) => table.id === action.payload.id
			);
			if (updatedTable) {
				updatedTable = { ...action.payload };
			}
		},
		removeTable: (state, action) => {
			state.tables = state.tables.filter(
				(table) => table.id !== action.payload
			);
		},
		addTable: (state, action) => {
			state.tables.push(action.payload);
		},
	},
});

export const { fetchTables, updateTable, removeTable, addTable } =
	tablesSlice.actions;

export default tablesSlice.reducer;
