const NODE_ENV = process.env.NODE_ENV || 'development'

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app',
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: 'index.js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extentions: ['', '.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        extentions: ['', '.js'],
        moduleTemplates: ["*-loader", "*"]
    },
    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV === 'development' ? 'cheep-inline-module-source-map' : null,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('css!stylus?linenos')
            },
            {
                test: /\.pug$/,
                exclude: /app\.pug$/,
                loader: 'file?name=ng-tmpls/[hash].html!jade-html'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file?name=img/[hash].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('index.css'),
        new HtmlWebpackPlugin({
            template: 'pug?pretty!./app/app.pug'
        })
    ],
    externals: {
        angular: true
    }
};
