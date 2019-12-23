## Setup
    $ npm install webpack --save-dev

## Command line
    $ webpack src/main.js dist/bundle.js
    $ webpack src/main.js dist/bundle.js --watch

## npm scripts
    "build": "webpack src/main.js dist/bundle.js",
    "watch": "npm run build -- --watch"   
    npm 2.0 above support special option --  pass all the arguments after the --
    directly to the script.


## use webpack.config.js and npm script
    const webpack = require('webpack');

    module.exports = {
        entry: './src/main.js',
        output: {
            path: './dist',
            filename: 'bundle.js'
        }
    }

    "scripts": {
        "build": "webpack",
        "watch": "npm run build -- --watch"
    },