'use strict';

const paths = require('./paths');
const base = require('./webpack.base.js');
const merge = require('webpack-merge');

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        contentBase: paths.build,
        hot: true,
        port: 3000,
        overlay: {
            warnings: true,
            errors: true
        }
    },
});
