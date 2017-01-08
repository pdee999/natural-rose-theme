var path = require('path');
module.exports = {
    entry: './js/core.js',
    output: {
        path: './js/',
        filename: "bundle.js",
    },
    module: {
        preLoaders: [
            {
                test: /.*\.js$/,
                exclude: [
                    /(node_modules|vendor|wp-admin|wp-includes|plugins|twentyfifteen|twentysixteen|twentyseventeen|libs)/
                ],
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /.*\.js$/,
                exclude: [
                    /(node_modules|vendor|wp-admin|wp-includes|plugins|twentyfifteen|twentysixteen|twentyseventeen|libs)/
                ],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /.*\.js$/,
                exclude: [
                    /(node_modules|vendor|wp-admin|wp-includes|plugins|twentyfifteen|twentysixteen|twentyseventeen|libs)/
                ],
                loader: 'uglify'
            },
            {
                test: /.*\.scss$/,
                exclude: [
                    /(node_modules|vendor|wp-admin|wp-includes|plugins|twentyfifteen|twentysixteen|twentyseventeen|libs)/
                ],
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    watch: false, // You need to keep the grunt process alive
    watchOptions: {
        aggregateTimeout: 500,
        // poll: true // Use this when you need to fallback to poll based watching (webpack 1.9.1+ only)
    },
    keepalive: false, // defaults to true for watch and dev-server otherwise false
};