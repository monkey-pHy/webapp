const path = require('path');
const srcRoot = path.resolve('./src');
const devPath = path.resolve(_dirname, 'dev');
const pageDir = path.resolve(srcRoot, 'page');

module.exports = {
    entry: {},
    ouput: {},
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            include: srcRoot
        }]
    }
}