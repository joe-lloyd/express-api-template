import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import ExampleModule from './modules/example';
import App from './components';

document.addEventListener('DOMContentLoaded', () => {

	if (document.querySelector('body')) {
		new ExampleModule();
	}

	if (document.querySelector('#app')) {
		ReactDOM.render(<App />, document.querySelector('#app'));
	}
});
