const path = require('path')

module.exports = {
    src: path.resolve(__dirname, '../__dev'), // source files
    build: path.resolve(__dirname, '../public_html'), // production build files
    static: path.resolve(__dirname, '../static'), // static files to copy to build folder,
};
