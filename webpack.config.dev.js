const path = require('path');
const srcRoot = path.resolve('./src');
const devPath = path.resolve(__dirname, 'dev');
const pageDir = path.resolve(srcRoot, 'page');
//__dirname是node的魔术变量

module.exports = {
    entry: {},
    ouput: {},
    module: {
        rules: [
            //css结尾的文件，加载css-loader（在include中的文件才会生效）
            {test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot}] 
    }
}