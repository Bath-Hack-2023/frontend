const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	// What the main entry point is to our app
	entry: {
		popup: "./src/popup.jsx",
	},
	// Where we are putting the result of compiling that file to js
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
	// How webpack knows what other files to include
	module: {
		rules: [
			{
				// Compile every file that ends in .js or .jsx
				test: /\.(js|jsx)$/,
				// Apart from node modules files
				exclude: /node_modules/,
				// To do this, use the babel-loader - Babel is a free and open-source JavaScript transcompiler
				use: {
					loader: "babel-loader",
					options: {
						// Tell it to use specifically the react babel compiler
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	plugins: [
		// Our react app also needs a static html file to work with so copy that into the same place our compiled code goes
		// This is not in the bit about because .html files are already understood by the browser so do not need to be compiled
		new HtmlWebpackPlugin({
			template: "./src/popup.html",
			filename: "popup.html",
		}),
		// Finally, for chrome to understand our app, we need to copy the manifest.json file
		// We acheive this by just copying the whole public file which currently just contains manifest.json
		// Manifest.json contains some very basic information about our app like the name of it, what version of the app it is and
		// most importantly the "deafault_action", which is the code that's run when the chrome extesion is clicked.
		new CopyPlugin({
			patterns: [{ from: "public" }],
		}),
		new MiniCssExtractPlugin(),
	],
};
