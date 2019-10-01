'use strict';

const paths = require('./paths');
const base = require('./webpack.base.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: paths.build,
        hot: true,
        // uncomment this lines when use local server with https://
        // host: 'localhost.dev',
        // https: true,
        port: 3000,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});
