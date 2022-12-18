import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => (
	<li className='list-group-item d-flex justify-content-between'>
		<span
			onClick={() => onToggleTodo(todo.id)}
			className={`align-self-center ${
				todo.done ? 'text-decoration-line-through' : ''
			}`}
			aria-label='span'
		>
			{todo.description}
		</span>
		<button
			type='button'
			className='btn btn-danger'
			onClick={() => onDeleteTodo(todo.id)}
		>
			Borrar
		</button>
	</li>
);

TodoItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		done: PropTypes.bool.isRequired,
	}).isRequired,
	onDeleteTodo: PropTypes.func.isRequired,
	onToggleTodo: PropTypes.func.isRequired,
};
