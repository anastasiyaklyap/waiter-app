import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<Container>
			<Header />
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
