## 
    npm install sass-loader node-sass --save-dev


## Loaders

    module: {
        rules: [{
            test: /\.s[ca]ss$/,
            use: ['style-loader', 'css-loader', ' sass-loader']  
        }]
    }


## Extract css into a separate file
    npm install extract-text-webpack-plugin --save-dev

    {
        test: /\.s[ca]ss$/,
        use: ExtractTextPlugin.extract({
            use: ['css-loader', ' sass-loader'],
            fallback:'style-loader'
        })
    }

    plugins: [
        new ExtractTextPlugin('style.css')   // [name].css
    ]