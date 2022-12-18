import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

/* eslint-disable no-undef */
describe('Pruebas en el componente <TodoItem />', () => {
	const todo = {
		id: 1,
		description: 'Estudiar React',
		done: false,
	};
	const onDeleteTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test('debe de mostrar el Todo pendiente', () => {
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const liElement = screen.getByRole('listitem');
		expect(liElement.className).toBe(
			'list-group-item d-flex justify-content-between'
		);

		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toContain('align-self-center');
		expect(spanElement.className).not.toContain('text-decoration-line-through');
	});

	test('debe de mostrar el Todo completado', () => {
		todo.done = true;
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toContain('text-decoration-line-through');
	});

	test('debe de mostrar el Todo completado', () => {
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const spanElement = screen.getByLabelText('span');
		fireEvent.click(spanElement);

		expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
	});

	test('debe de mostrar el Todo completado', () => {
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const btnElement = screen.getByRole('button');
		fireEvent.click(btnElement);

		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
