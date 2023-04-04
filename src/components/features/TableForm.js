import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { getTableById, updateTableRequest } from '../../redux/tablesRedux';

const TableForm = ({ tableId }) => {
	const tableData = useSelector((state) => getTableById(state.tables, tableId));
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [status, setStatus] = useState(tableData.status);
	const [bill, setBill] = useState(tableData.bill);
	const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
	const [maxPeopleAmount, setMaxPeopleAmount] = useState(
		tableData.maxPeopleAmount
	);
	const tableStatus = ['Free', 'Reserved', 'Busy', 'Cleaning'];

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			updateTableRequest({
				id: tableId,
				status,
				peopleAmount,
				maxPeopleAmount,
				bill,
			})
		);
		navigate('/');
	};
	const handleStatusChange = (e) => {
		setStatus(e.target.value);
		if (e.target.value === 'Cleaning' || e.target.value === 'Free') {
			setPeopleAmount(0);
			setBill(0);
		} else {
			setPeopleAmount(peopleAmount);
		}
		if (e.target.value === 'Busy') {
			setBill(0);
		}
	};

	const handleMaxPeopleChange = (e) => {
		setMaxPeopleAmount(parseInt(e.target.value));
		if (e.target.value < peopleAmount) {
			setPeopleAmount(parseInt(e.target.value));
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<InputGroup className='mb-3'>
				<InputGroup.Text id='inputGroup-sizing-default'>
					Status:
				</InputGroup.Text>
				<Form.Select
					value={status}
					onChange={handleStatusChange}
				>
					{tableStatus.map((table) => (
						<option key={table}>{table}</option>
					))}
				</Form.Select>
			</InputGroup>
			<InputGroup className='mb-3'>
				<InputGroup.Text id='inputGroup-sizing-default'>
					People:
				</InputGroup.Text>
				<Form.Control
					type='number'
					value={peopleAmount}
					className='me-2'
					onChange={(e) => setPeopleAmount(parseInt(e.target.value))}
					max={maxPeopleAmount}
					min='0'
				/>
				<span>/</span>
				<Form.Control
					type='number'
					value={maxPeopleAmount}
					className='ms-2'
					onChange={handleMaxPeopleChange}
					max='10'
					min='0'
				/>
			</InputGroup>
			{status === 'Busy' && (
				<InputGroup className='mb-3'>
					<InputGroup.Text id='inputGroup-sizing-default'>
						Bill: $
					</InputGroup.Text>
					<Form.Control
						type='number'
						value={bill}
						onChange={(e) => setBill(parseInt(e.target.value))}
					/>
				</InputGroup>
			)}
			<Button
				variant='primary'
				type='submit'
			>
				Update
			</Button>
		</Form>
	);
};

export default TableForm;
