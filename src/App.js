import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Landing from './components/Landing';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
		<Provider store={store}>
			<div className='App'>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</div>
		</Provider>
	);
};

export default App;
