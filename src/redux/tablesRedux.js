import { API_URL } from "../config";

const createActionName = (actionName) => `app/tables/${actionName}`;
const FETCH_TABLES = createActionName('FETCH_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');

export const getTableById = ({ tables }, tableId) => {
	return tables.find((table) => table.id === tableId);
};

export const getAllTables = ({ tables }) => {
	return tables;
};

export const updateTables = (payload) => ({
	type: FETCH_TABLES,
	payload,
});

export const updateTable = (payload) => ({
	type: UPDATE_TABLE,
	payload,
});

export const removeTable = (payload) => ({
	type: REMOVE_TABLE,
	payload,
});

export const addTable = (payload) => ({
	type: ADD_TABLE,
	payload,
});

export const fetchTables = () => {
	return async (dispatch) => {
		try {
			const res = await fetch(`${API_URL}/tables`);
			const tables = await res.json();
			dispatch(updateTables(tables));
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
			await fetch(
				`${API_URL}/tables/${updatedTable.id}`,
				options
			);
			await dispatch(updateTable(updateTable));
		} catch (err) {
			console.error(err);
		}
	};
};

const tablesReducer = (statePart = [], action) => {
	switch (action.type) {
		case FETCH_TABLES:
			return [...action.payload];
		case UPDATE_TABLE:
			return statePart.map((table) =>
				table.id === action.payload.id ? { ...action.payload } : table
			);
		case REMOVE_TABLE:
			return statePart.filter((table) => table.id !== action.payload);
		case ADD_TABLE:
			return [
				...statePart,
				{
					...action.payload,
				},
			];
		default:
			return statePart;
	}
};
export default tablesReducer;
