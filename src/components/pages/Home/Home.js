import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import PageTitle from '../../common/PageTitle/PageTitle';
import TableInfo from './TableInfo';
import { useDispatch } from 'react-redux';
import { removeTable } from '../../../redux/tablesRedux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const tables = useSelector((state) => getAllTables(state));
	const handleRemoveTable = (id) => {
		dispatch(removeTable(id));
		navigate('/');
	};
	console.log(tables);
	return (
		<>
			<PageTitle className='pb-2'>All tables</PageTitle>
			{tables.map((table) => (
				<TableInfo
					key={table.id}
					id={table.id}
					status={table.status}
					remove={handleRemoveTable}
				/>
			))}
		</>
	);
};

export default Home;
