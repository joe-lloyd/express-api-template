/**
 * @class ExampleModule
 *
 * @description
 * Example module to text if the js is working
 *
 * @example
 * new ExampleModule();
 *
 */
export default class ExampleModule {

	main = document.querySelector('main');

	/**
	 * @constructor
	 */
	constructor () {
		console.log('example module working');
		this.addEventListeners();
	}

	/**
	 * @description
	 * adds the events for this module
	 *
	 */
	addEventListeners () {
		this.main.addEventListener('click', (event) => this.checkEvent(event));
	}

	/**
	 * @description
	 * checks the event that was triggered.
	 *
	 * @param {Event} event - the event triggered
	 * @returns {String}
	 */
	checkEvent (event) {
		return `the event triggered was ${event.type}`;
	}
}