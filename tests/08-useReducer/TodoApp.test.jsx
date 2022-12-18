import { render, screen } from '@testing-library/react';
import { useTodo } from '../../src/hooks/useTodo';
import { TodoApp } from '../../src/08-useReducer/TodoApp';

/* eslint-disable no-undef */
jest.mock('../../src/hooks/useTodo');
describe('Pruebas en <TodoApp />', () => {
	useTodo.mockReturnValue({
		todos: [
			{
				id: 1,
				description: 'Estudiar React',
				done: true,
			},
			{
				id: 2,
				description: 'Estudiar Node',
				done: false,
			},
		],
		todosCount: 2,
		pendingTodosCount: 1,
		handleNewTodo: jest.fn(),
		handleDeleteTodo: jest.fn(),
		handleToggleTodo: jest.fn(),
	});
	test('debe de mostrar el componente correctamente', () => {
		render(<TodoApp />);

		expect(screen.getByText('Estudiar React')).toBeTruthy();
		expect(screen.getByText('Estudiar Node')).toBeTruthy();
		expect(screen.getByRole('textbox')).toBeTruthy();
	});
});
