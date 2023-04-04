import { Toast } from 'react-bootstrap';

const ToastMsg = ({ variant, title, description, onClick }) => {
	return (
		<Toast
			className='d-inline-block m-1'
			bg={variant}
			onClose={onClick}
		>
			<Toast.Header>
				<strong className='me-auto'>{title}</strong>
			</Toast.Header>
			<Toast.Body className={variant === 'Dark' && 'text-white'}>
				{description}
			</Toast.Body>
		</Toast>
	);
};

export default ToastMsg;
