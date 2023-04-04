import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { addTableRequest, getAllTables } from '../../redux/tablesRedux';
import ToastMsg from '../common/ToastMsg/ToastMsg';

const AddNewTable = () => {
	const [newTable, setNewTable] = useState('');
	const [warning, setWarning] = useState(false);
	const dispath = useDispatch();

	const tables = useSelector((state) => getAllTables(state));

	const handleAddTable = async (e) => {
		e.preventDefault();
		let currentTables = [];
		tables.map(({ id }) => currentTables.push(id));
		if (!newTable || currentTables.includes(newTable)) {
			setWarning(true);
		} else {
			setWarning(false);
			dispath(
				addTableRequest({
					id: newTable,
					status: 'Free',
					peopleAmount: 0,
					maxPeopleAmount: 0,
					bill: 0,
				})
			);
		}
	};
	return (
		<>
			<Form onSubmit={handleAddTable}>
				<InputGroup className='mb-3'>
					<InputGroup.Text id='inputGroup-sizing-default'>
						Add new table:
					</InputGroup.Text>
					<Form.Control
						type='number'
						onChange={(e) => {
							setNewTable(String(e.target.value));
							setWarning(false);
						}}
					/>
					<Button
						variant='primary'
						type='submit'
					>
						Add
					</Button>
				</InputGroup>
			</Form>
			{warning && newTable && (
				<ToastMsg
					variant='danger'
					title='ID issue'
					description='Table with given id already exists. Please provide different table number'
					onClick={() => setWarning(false)}
				/>
			)}
			{warning && !newTable && (
				<ToastMsg
					variant='danger'
					title='ID is missing'
					description='There is no table ID provided. Please add it'
					onClick={() => setWarning(false)}
				/>
			)}
		</>
	);
};

export default AddNewTable;
