import { render, screen, waitFor } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples/MultipleCustomHook';
import { useFetch } from '../../src/hooks/useFetch';

/* eslint-disable no-undef */
jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <MultipleCustomHook />', () => {
	test('debe de mostrar el componente por defecto', () => {
		useFetch.mockReturnValue({
			data: null,
			isLoading: true,
			hasError: null,
		});

		render(<MultipleCustomHook />);

		expect(screen.getByText('Loading...'));
		expect(screen.getByText('PokeApi Pokemons'));
	});

	test('debe de mostrar una lista de pokemons', async () => {
		useFetch.mockReturnValue({
			data: {
				count: 1154,
				next: 'https://pokeapi.co/api/v2/pokemon?offset=5&limit=5',
				previous: null,
				results: [
					{
						name: 'bulbasaur',
						url: 'https://pokeapi.co/api/v2/pokemon/1/',
					},
					{
						name: 'ivysaur',
						url: 'https://pokeapi.co/api/v2/pokemon/2/',
					},
					{
						name: 'venusaur',
						url: 'https://pokeapi.co/api/v2/pokemon/3/',
					},
					{
						name: 'charmander',
						url: 'https://pokeapi.co/api/v2/pokemon/4/',
					},
					{
						name: 'charmeleon',
						url: 'https://pokeapi.co/api/v2/pokemon/5/',
					},
				],
			},
			isLoading: false,
			hasError: null,
		});

		render(<MultipleCustomHook />);

		await waitFor(() => {
			expect(screen.getByText('BULBASAUR')).toBeTruthy();
			expect(screen.getByText('IVYSAUR')).toBeTruthy();
			expect(
				screen.getByRole('button', { name: 'Anterior' }).disabled
			).toBeTruthy();
			expect(
				screen.getByRole('button', { name: 'Siguiente' }).disabled
			).toBeFalsy();
		});
	});
});
