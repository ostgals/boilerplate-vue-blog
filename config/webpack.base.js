'use strict';

const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        common: './__dev/index.js'
    },
    output: {
        filename: 'assets/js/[name].min.js',
        path: paths.build,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // Uncomment if it is necessary
                // exclude: /node_modules\/(?!(my_main_package\/what_i_need_to_include)\/).*/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: 'config/postcss.config.js' }
                        }
                    }
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: 'config/postcss.config.js' }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vue.js based blog',
            template: paths.src + '/template/index.html', // template file
            filename: 'index.html', // output file
            minify: {
                html5: true,
                collapseWhitespace: true,
                removeComments: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            'meta': {
                'viewport': 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
                'theme-color': '#E21A1A',
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.min.css',
        }),
    ],
}
