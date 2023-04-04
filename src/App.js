import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import { Container } from 'react-bootstrap';
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spinner, Button } from 'react-bootstrap';

function App() {
	const [spinner, setSpinner] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				setSpinner(true);
				await dispatch(fetchTables());
			} catch (err) {
				console.log(err);
			} finally {
				setSpinner(false);
			}
		})();
	}, [dispatch]);

	return (
		<Container>
			<Header />
			{spinner && (
				<div className='d-flex justify-content-center align-items-center mt-4'>
					<Button
						variant='primary'
						disabled
					>
						<Spinner
							as='span'
							animation='grow'
							size='sm'
							role='status'
							aria-hidden='true'
						/>
						Loading...
					</Button>
				</div>
			)}
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/table/:tableId'
					element={<Table />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
			<Footer></Footer>
		</Container>
	);
}

export default App;
