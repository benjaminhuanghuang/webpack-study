
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

## Loader
  - babel-loader: teach babel how to work with webpack
  - babel-core: transpile code 
  - babel-preset-env: rule set for telling babel how to turn code into ES5 code

  - css-loader : deal css imports
  - style-loader: takes css imports and adds them to the html document