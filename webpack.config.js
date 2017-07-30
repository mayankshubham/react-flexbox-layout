var debug=process.env.NODE_ENV !== "production";
var path=require("path");
var webpack=require("webpack");

module.exports = {
	context: path.join(__dirname, "/"),
	devtool: debug ? "inline-sourcemap" : false,
	entry: "./src/js/index.js",
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: [/node_modules/],
			use: [{
				loader: "babel-loader",
				options: {
							presets: ["stage-0","es2015","react"],
							plugins: ["transform-class-properties"]
						}
			}]	
		},{
			test: /\.(scss|css)$/,
			use: ['style-loader', 'css-loader']
			
		},{
			test: /\.(jpe?g|png|gif|svg)$/,
			use:['url-loader']
		},{
			test: /\.json$/,
			use:['json-loader']
		}]

	},
	output: {
		path: __dirname + "/src",
		filename: "bundle.js"
	},
	plugins: debug? [] : [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
	]
}