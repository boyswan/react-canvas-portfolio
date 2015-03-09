var webpack = require('webpack'); 

module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./app/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.(png|svg|jpg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass", exclude: /node_modules/}
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
    ]
};

