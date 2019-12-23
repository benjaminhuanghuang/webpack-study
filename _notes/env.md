## Using code and npm script
    var inProd = process.env.NODE_ENV === 'production'
    
    if(inProd'){
        module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
    }

    "prd": "NODE_ENV === prd webpack"
    or
    "prd": "webpack -p"
    

##  Use config
