## css
    npm install css-loader --save-dev

    module: {
        rules: [{
            test: /\.css$/,
            use: ['css-loader']
        }]
    }

## style loader
    inject the css into the page
    npm install style-loader --save-dev

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']   //take effect from right to left
        }]
    }