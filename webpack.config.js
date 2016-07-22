const fs = require('fs');
const path = require('path');

var baseAliasPath = path.resolve(__dirname, './src/components/') + '/';
var alias = {};
fs.readdirSync(baseAliasPath).forEach(function(dirname) {
	var stat = fs.lstatSync(baseAliasPath + dirname);
	if (stat.isDirectory()) {
		if (fs.existsSync(baseAliasPath + dirname + '/index.js')) {
			alias[dirname] = baseAliasPath + dirname + '/index.js';
		}
	}
});


module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist/'),
		publicPath: '/dist/',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{ test: /\.html$/, loader: 'html', exclude: /node_modules/ },
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'style!css', exclude: /node_modules/ }
		]
	},
	resolve: {
		root: './src/',
		alias: alias
	},
	devtool: '#source-map'
};