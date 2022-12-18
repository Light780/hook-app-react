import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';

/* eslint-disable no-undef */
describe('Pruebas en <TodoApp />', () => {
	const user = {
		id: 1,
		name: 'Bruno Ramos',
	};

	test('debe de mostrar el componente sin el usuario', () => {
		render(
			<UserContext.Provider value={null}>
				<HomePage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText('pre');

		expect(preTag.innerHTML).toBe('null');
	});

	test('debe de mostrar el componente con el usuario', () => {
		render(
			<UserContext.Provider value={{ user }}>
				<HomePage />
			</UserContext.Provider>
		);
		const preTag = screen.getByLabelText('pre');

		expect(preTag.innerHTML).toContain(user.id.toString());
		expect(preTag.innerHTML).toContain(user.name);
	});
});
