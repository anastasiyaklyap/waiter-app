import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import RemoveTable from '../../features/RemoveTable';

const TableInfo = ({ id, status }) => {
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
				<RemoveTable id={id} />
			</div>
		</article>
	);
};

export default TableInfo;
