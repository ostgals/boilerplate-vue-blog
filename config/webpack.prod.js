'use strict';

const paths = require('./paths');
const base = require('./webpack.base.js');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: paths.static, to: paths.build },
            { from: paths.src + '/fonts', to: paths.build + '/assets/fonts' },
            { from: paths.src + '/images', to: paths.build + '/images' },
        ]),
    ],
});
