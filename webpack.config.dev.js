//定义常见目录路径
const path = require('path');
const fs = require('fs'); //node中对于文件系统的库，系统提供
const srcRoot = path.resolve('./src'); //resolve就是对路径进行拼接
const devPath = path.resolve(__dirname, 'dev'); //表示当前webpack.config.dev.js所在的文件
const pageDir = path.resolve(srcRoot, 'page');
const mainFile = 'index.js';
//__dirname是node的魔术变量
//node文件目录遍历来生成entry
function getEntry() {
    let entryMap = {};
    //readdirSync方法用于读取目录，返回一个所包含和子目录的数组
    fs.readdirSync(pageDir).forEach((pathname) => {
        let fullPathName = path.resolve(pageDir, pathname);
        let stat = fs.statSync(fullPathName); //判断FullPathName是个文件路径还是个文件
        let fileName = path.resolve(fullPathName, mainFile);//如果是个文件那就可以拿到其入口文件（以.js为结尾）

        if (stat.isDirectory() && fs.existsSync(fileName)) {
            //判断fullname是个路径不是个文件并且存在
            entryMap[pathname] = fileName;
        }
    }); //pageDir代表page目录
    return entryMap;
}

const entryMap = getEntry();

module.exports = {
    mode: "development",
    entry: entryMap,
    output: {
        path: devPath,
        filename: '[name].min.js'

    },
    module: {
        //配置loader
        rules: [
            //css结尾的文件，加载css-loader（在include中的文件才会生效）
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: srcRoot
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: srcRoot
            }, //后期还要安装sassloader
            {
                test: /\.(png|jpg|jpeg)$/,
                use: 'url-loader?limit=8192',
                include: srcRoot
            } //当图片小于8192，就会把图片转成base64进行加载，大于8192就原静态图片引入
        ]
    }
}