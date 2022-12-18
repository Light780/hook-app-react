import PropTypes from 'prop-types';

export const GridItem = ({ pokemon }) => (
	<tr>
		<td>{pokemon.id}</td>
		<td>{pokemon.name.toUpperCase()}</td>
		<td>{pokemon.type.toUpperCase()}</td>
		<td>
			<img src={pokemon.sprites} alt={pokemon.name} width={100} height={100} />
		</td>
	</tr>
);

GridItem.propTypes = {
	pokemon: PropTypes.instanceOf(Object).isRequired,
};
