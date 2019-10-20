import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getSymbols } from '../actions/stockActions';

const Landing = ({ getSymbols, list: { list } }) => {
	// const [list, setList] = useState([]);
	const [favs, setFavs] = useState([]);

	useEffect(() => {
		getSymbols();
	}, [getSymbols]);

	console.log('list from Landing:', list);

	const onClick = ({ symbol, name }) => {
		favs.push({ [symbol]: name });
		setFavs(favs);

		console.log('favs:', favs);
		console.log('Object.keys(favs[0])[0]:', Object.keys(favs[0])[0], Object.values(favs[0])[0]);
	};

	return (
		<div>
			Landing.
			{ list && list.length > 0 &&
				list.slice(0, 10).map((item) =>
					<div style={{ textAlign: 'left'}} onClick={() => onClick(item)} key={item.symbol}>
						{ item.symbol }: { item.name }
					</div>
				)
			}
			Favs:
			{ favs.map(fav => <p>test</p>) }
		</div>
	);
};

const mapStateToProps = state => ({
	list: state.list,
	error: state.error
});

export default connect(mapStateToProps, { getSymbols })(Landing);
