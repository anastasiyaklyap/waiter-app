import { Navbar, Nav, NavLink } from 'react-bootstrap';
const NavBar = () => {
	return (
		<Navbar
			className='rounded'
			bg='primary'
			variant='dark'
		>
			<Nav className='me-auto'>
				<Navbar.Brand
					as={NavLink}
					to='/'
				>
					Waiter.app
				</Navbar.Brand>
			</Nav>
			<Nav>
					<Nav.Link
						as={NavLink}
						to='/'
					>
						Home
					</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default NavBar;
