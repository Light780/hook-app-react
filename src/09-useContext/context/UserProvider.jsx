import PropTypes from 'prop-types';
import { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
// 	id: 123,
// 	name: 'Bruno Ramos',
// 	email: 'brunorlm88@gmail.com',
// };
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState();

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

UserProvider.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
