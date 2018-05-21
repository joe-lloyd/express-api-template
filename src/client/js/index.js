import '@babel/polyfill';

import ExampleModule from './modules/example';

document.addEventListener('DOMContentLoaded', () => {

	if (document.querySelector('body')) {
		new ExampleModule();
	}
});
