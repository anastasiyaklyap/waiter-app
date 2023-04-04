import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeTableRequest } from '../../redux/tablesRedux';

const RemoveTable = ({ id }) => {
	const dispatch = useDispatch();

	const handleRemoveTable = () => {
		dispatch(removeTableRequest(id));
	};

	return (
		<Button
			variant='primary'
			className='ms-2'
			onClick={handleRemoveTable}
		>
			Remove table
		</Button>
	);
};

export default RemoveTable;
