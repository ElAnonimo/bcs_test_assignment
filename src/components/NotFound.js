import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<Fragment>
			NotFound
			<Link to='/'>Home</Link>
		</Fragment>
	);
};

export default NotFound;
