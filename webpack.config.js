const NODE_ENV = process.env.NODE_ENV || 'development'

let path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        filename: './app/bundle.js'
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
    wathOptions: {
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
            }
        ]
    }
};
