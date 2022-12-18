import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';
import { GridItem } from './GridItem';

export const Grid = ({ pokemons }) => {
	const tRef = useRef();
	const [boxSize, setBoxSize] = useState({
		width: 0,
		height: 0,
	});
	useLayoutEffect(() => {
		const { height, width } = tRef.current.getBoundingClientRect();
		setBoxSize({ height, width });
	}, [pokemons]);
	return (
		<>
			<div style={{ display: 'flex' }}>
				<table className='table table-striped' ref={tRef}>
					<thead>
						<tr>
							<th scope='col'>Id</th>
							<th scope='col'>Name</th>
							<th scope='col'>Types</th>
							<th scope='col'>Sprites</th>
						</tr>
					</thead>
					<tbody>
						{pokemons &&
							pokemons.map(pokemon => (
								<GridItem key={pokemon.id} pokemon={pokemon} />
							))}
					</tbody>
				</table>
			</div>
			<h5>{JSON.stringify(boxSize)}</h5>
		</>
	);
};

Grid.propTypes = {
	pokemons: PropTypes.instanceOf(Array).isRequired,
};
