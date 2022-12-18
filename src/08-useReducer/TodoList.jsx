import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => (
	<ul className='list-group'>
		{todos.map(todo => (
			<TodoItem
				key={todo.id}
				todo={todo}
				onDeleteTodo={onDeleteTodo}
				onToggleTodo={onToggleTodo}
			/>
		))}
	</ul>
);

TodoList.defaultProps = {
	todos: [],
};

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			description: PropTypes.string.isRequired,
			done: PropTypes.bool.isRequired,
		})
	),
	onDeleteTodo: PropTypes.func.isRequired,
	onToggleTodo: PropTypes.func.isRequired,
};
