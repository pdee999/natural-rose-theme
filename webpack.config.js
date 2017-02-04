var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
module.exports = {
    entry: './js/core.js',
    output: {
        path: './bundle/',
        //filename: "bundle.js",
        filename: '[name].entry.chunk.js',
        publicPath: 'C:/Users/patrick.rittenhouse/Documents/Projects/Natural%20Rose/Theme/bundle/'
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
                test: /\.(jpe?g|gif|png)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[name].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false&name=/[name].[ext]'
                ]
            },
            // {
            //     test: /\.(png)(\?|#[#?a-z]+)?(\?|#[#?0-9]+)?(#[a-z]+)?(#[0-9]+)?/,
            //     //test: /.(png|woff(2)?|eot|ttf|svg)(?[a-z0-9=.]+)?$/,
            //     exclude: [
            //         /(node_modules|vendor|wp-admin|wp-includes|plugins|twentyfifteen|twentysixteen|twentyseventeen|libs|vendor|bundle|public)/
            //     ],
            //     loader: 'url-loader?limit=1?name=/[name].[ext]'
            // },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?|#[#?a-z]+)?(\?|#[#?0-9]+)?(#[a-z]+)?(#[0-9]+)?/,
                loader: 'file-loader?name=/[name].[ext]'
            },
            // {
            //     test: /.*\.scss$/,
            //     exclude: [
            //         /(node_modules|vendor|wp-admin|wp-includes|plugins|twentyfifteen|twentysixteen|twentyseventeen|libs)/
            //     ],
            //     loader: 'style-loader!css-loader!resolve-url-loader!ruby-sass'
            // },
            {
                test: /.*\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader?sourceMap!ruby-sass?sourceMap'),
                fallbackLoader: 'style-loader!css-loader?sourceMap!postcss-loader?sourceMap!ruby-sass?sourceMap'
            }
            // {
            //     test: /.*\.scss$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!resolve-url-loader!ruby-sass?sourceMap'),
            //     fallbackLoader: 'style-loader!css-loader?sourceMap!resolve-url-loader!ruby-sass?sourceMap'
            // }
            // {
            //     test: /.*\.scss$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!resolve-url-loader!sass-loader?config=sassLoader'),
            //     fallbackLoader: 'style-loader!css-loader?sourceMap!resolve-url-loader!sass-loader?config=sassLoader'
            // }
        ]
    },
    postcss: function() {
            return [
                require('pixrem'),
                require('autoprefixer')
            ];
    },
    plugins: [
        new ExtractTextPlugin('styles.bundle.css'),
        new CommonsChunkPlugin('commons.chunk.js'),
        new webpackUglifyJsPlugin({
            cacheFolder: path.resolve(__dirname, '.uglify-cache/'),
            debug: true,
            minimize: true,
            sourceMap: true,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        })
    ],
    devtool: "source-map",
    watch: false, // You need to keep the grunt process alive
    watchOptions: {
        aggregateTimeout: 500,
        // poll: true // Use this when you need to fallback to poll based watching (webpack 1.9.1+ only)
    },
    keepalive: false, // defaults to true for watch and dev-server otherwise false
};