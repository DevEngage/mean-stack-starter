
var webpack = require('webpack');

module.exports = {
    entry: "./public/app/app.ts",
    output: {
        path: __dirname,
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' }
        ]
    }
};