
var webpack = require('webpack');

module.exports = {
    entry: "./app.ts",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' }
        ]
    }
};