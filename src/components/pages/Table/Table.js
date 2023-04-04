import { useParams, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getTableById } from '../../../redux/tablesRedux';
import PageTitle from '../../common/PageTitle/PageTitle';
import TableForm from '../../features/TableForm';

const Table = () => {
	const { tableId } = useParams();
	const tableData = useSelector((state) => getTableById(state.tables, tableId));

	if (!tableData) return <Navigate to='/' />;
	return (
		<Row>
			<PageTitle>Table {tableId}</PageTitle>
			<Col md={3}>
				<TableForm tableId={tableId} />
			</Col>
		</Row>
	);
};

export default Table;
