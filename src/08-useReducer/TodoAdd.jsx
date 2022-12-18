import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = event => {
		event.preventDefault();

		if (description.length <= 1) return;

		const newTodo = {
			description,
			done: false,
		};

		if (onNewTodo) onNewTodo(newTodo);

		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				placeholder='¿Qué hay que hacer?'
				className='form-control'
				onChange={onInputChange}
				name='description'
				value={description}
			/>
			<button type='submit' className='btn btn-outline-primary mt-2'>
				Agregar
			</button>
		</form>
	);
};

TodoAdd.propTypes = {
	onNewTodo: PropTypes.func.isRequired,
};
