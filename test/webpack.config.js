// Just run "webpack-dev-server"
module.exports = {
	context: __dirname,
	entry: "mocha-loader!./all.js",
	resolve: {
		extensions: ["", ".js", ".css", ".styl"]
	}
};