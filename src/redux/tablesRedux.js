import { act } from 'react-dom/test-utils';

const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');

export const getTableById = ({ tables }, tableId) => {
	return tables.find((table) => table.id === tableId);
};

export const getAllTables = ({ tables }) => {
	console.log(tables, 'getAllTables');
	return tables;
};

export const updateTable = (payload) => ({
	type: UPDATE_TABLE,
	payload,
});

export const removeTable = (payload) => ({
	type: REMOVE_TABLE,
	payload,
});

const tablesReducer = (statePart = [], action) => {
	switch (action.type) {
		case UPDATE_TABLE:
			return statePart.map((table) =>
				table.id === action.payload.id ? { ...action.payload } : table
			);
		case REMOVE_TABLE:
			console.log('remove table id ', action.payload);
			console.log(
				'new state ',
				statePart.filter((table) => table.id !== action.payload)
			);
			return statePart.filter((table) => table.id !== action.payload);
		default:
			return statePart;
	}
};
export default tablesReducer;
