const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "./build.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            //loader: "style-loader!css-loader"
            loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader:'css-loader'})
        }]
    },
    plugins:[
        new ExtractTextPlugin('dist/style.css')
    ]
}  