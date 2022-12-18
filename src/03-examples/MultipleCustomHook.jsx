import { useEffect, useState } from 'react';
import { useFetch } from '../hooks';
import { Loading, Grid } from '.';

const fetchPokemon = async url => {
	const response = await fetch(url);
	const pokemon = await response.json();
	return {
		id: pokemon.id,
		name: pokemon.name,
		sprites: pokemon.sprites.other.dream_world.front_default,
		type: pokemon.types[0].type.name,
	};
};

export const MultipleCustomHook = () => {
	const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=5');

	const { data, isLoading } = useFetch(url);

	const { results, next, previous } = !!data && data;

	const [pokemons, setPokemons] = useState([]);

	const nextPage = () => setUrl(next);

	const previousPage = () => setUrl(previous);

	const getPokemonsData = async pokemonsResult => {
		const promises = [];
		pokemonsResult.forEach(pokemon => promises.push(fetchPokemon(pokemon.url)));
		setPokemons(await Promise.all(promises));
	};

	useEffect(() => {
		if (!isLoading) getPokemonsData(results);
	}, [results]);

	return (
		<>
			<h1>PokeApi Pokemons</h1>
			<hr />

			{isLoading ? (
				<Loading />
			) : (
				<>
					<Grid pokemons={pokemons} />
					<div className='d-flex mb-3'>
						<div className='me-auto p-2'>
							<button
								disabled={!previous}
								onClick={previousPage}
								type='button'
								className='btn btn-primary'
							>
								Anterior
							</button>
						</div>
						<div className='p-2'>
							<button
								disabled={!next}
								onClick={nextPage}
								type='button'
								className='btn btn-primary'
							>
								Siguiente
							</button>
						</div>
					</div>
				</>
			)}
		</>
	);
};
