import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeTable } from '../../../redux/tablesRedux';

const TableInfo = ({ id, status, remove }) => {
	// const dispatch = useDispatch();

	// const handleRemoveTable = () => {
	// 	dispatch(removeTable(id));
	// };

	return (
		<article className='justify-content-between d-flex my-3 pb-2 border-bottom border-light border-2'>
			<div className='d-flex align-items-center'>
				<h3>Table {id}</h3>
				<h6 className='ms-2'>
					<strong>Status:</strong> {status}
				</h6>
			</div>
			<div>
				<Link
					key={id}
					to={`/table/${id}`}
				>
					<Button
						variant='primary'
						className='me-2'
					>
						Show more
					</Button>
				</Link>
				<Button
					variant='primary'
					className='ms-2'
					onClick={() => remove(id)}
				>
					Remove table
				</Button>
			</div>
		</article>
	);
};

export default TableInfo;
