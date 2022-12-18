import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

/* eslint-disable no-undef */
describe('Pruebas en <MainApp />', () => {
	test('debe de mostrar el HomePage', () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('HomePage')).toBeTruthy();
	});

	test('debe de mostrar el LoginPage', () => {
		render(
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('LoginPage')).toBeTruthy();
		expect(screen.getAllByRole('link')[3].className).toContain('active');
	});

	test('debe de mostrar el AboutPage', () => {
		render(
			<MemoryRouter initialEntries={['/about']}>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('AboutPage')).toBeTruthy();
		expect(screen.getAllByRole('link')[2].className).toContain('active');
	});
});
