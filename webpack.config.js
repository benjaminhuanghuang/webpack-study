const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
  entry: "./src/index.js", // relative path
  output: {
    path: path.resolve(__dirname, "build"), // absolute path
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [new ExtractTextPlugin("dist/style.css")]
};

module.exports = config;
