import config from './config.babel';
import nodeExternals from 'webpack-node-externals';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const serverSetup = {
	entry: {
		app: config.serverEntry
	},
	output: {
		path: config.dist,
		filename: 'server.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: `${config.serverEntry}/views`, to: 'views' }
		])
	],
	target: 'node',
	externals: [nodeExternals()]
};

module.exports = [serverSetup];
