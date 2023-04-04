import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import PageTitle from '../../common/PageTitle/PageTitle';
import TableInfo from './TableInfo';
import AddNewTable from '../../features/AddNewTable';

const Home = () => {
	const tables = useSelector((state) => getAllTables(state.tables));
	return (
		<>
			<PageTitle className='pb-2'>All tables</PageTitle>
			{tables &&
				tables.map((table) => (
					<TableInfo
						key={table.id}
						id={table.id}
						status={table.status}
					/>
				))}
			<AddNewTable />
		</>
	);
};

export default Home;
