
## webpack.config.js
```
const config ={
  entry: "./app.js",      // relative path
  output: {
      path: path.resolve(__dirname, "dist"),    // absolute path
      filename: "bundle.js"
  },
  module: {
      loaders: [{
          test: /\.css$/,
          loader: []
      }]
  },
  plugins:[
      new ExtractTextPlugin('dist/style.css')
  ]
};

module.exports = config;

```

## Script
  "build": "webpack --progress",

## js
  - babel-loader: teach babel how to work with webpack
  - babel-core: transpile code 
  - babel-preset-env: rule set for telling babel how to turn code into ES5 code

## CSS
  - css-loader : read css imports and generate css in bundle.js
  - style-loader: takes css imports and adds them to the html document by using "addStylesToDom"

## Image
  - image-webpack-loader :  resize the image
  - url-loader: Include image in bundle.js or output directory
  - file-loader

## Code splitting


## Vendor Asset Caching
  
    