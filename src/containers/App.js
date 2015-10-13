import React from 'react';
import SampleApp from './SampleApp';
import { combineReducers } from 'redux';  
import { Provider } from 'react-redux';
import { createStore, renderDevTools } from '../utils/devTools';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

var App = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Hello World</h1>
				<Provider store={store}>
					<SampleApp />
				</Provider>

				{renderDevTools(store)}
			</div>
		)
	}
});

export default App;