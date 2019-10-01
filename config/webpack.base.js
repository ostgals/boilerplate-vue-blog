'use strict';

const paths = require('./paths');

module.exports = {
    entry: {
        common: './__dev/index.js'
    },
    output: {
        filename: 'assets/js/[name].min.js',
        path: paths.build,
        publicPath: '/',
    },
}
