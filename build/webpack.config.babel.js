import path from 'path';
import webpack from 'webpack';
const root = path.resolve(__dirname, '..');

console.log(path.resolve(root, 'dist'));

module.exports = {

	entry:[
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/main.js'
	],
	output: {
		path: path.resolve(root, 'dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /(node_modules)/,
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass'],
				include: path.resolve(root, 'src/scss')
			},
			{
				test: /\.html$/,
				loader: 'html',
			},
			{
			test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
			loader: 'url',
			query: {
				 limit: 10000,
				 name: '[name]-[hash:7].[ext]'
			 },
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
}
