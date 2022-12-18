import PropTypes from 'prop-types';
import React from 'react';

// Si sus properties no han cambiado no se vuelve a redibujar
export const Small = React.memo(({ value }) => <small>{value}</small>);

Small.propTypes = {
	value: PropTypes.number.isRequired,
};
