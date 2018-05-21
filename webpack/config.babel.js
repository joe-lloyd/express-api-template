import path from 'path';

const DIST_PATH = path.resolve(__dirname, '../dist');
const DIST_PATH_CLIENT = path.resolve(__dirname, '../dist/client');
const CLIENT_ENTRY_PATH = path.resolve(__dirname, '../src/client');
const SERVER_ENTRY_PATH = path.resolve(__dirname, '../src/server');

export default {
	clientEntry: CLIENT_ENTRY_PATH,
	serverEntry: SERVER_ENTRY_PATH,
	dist: DIST_PATH,
	distClient: DIST_PATH_CLIENT
};