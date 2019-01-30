//定义常见目录路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs'); //node中对于文件系统的库，系统提供
const srcRoot = path.resolve('./src'); //resolve就是对路径进行拼接
const devPath = path.resolve(__dirname, 'dev'); //表示当前webpack.config.dev.js所在的文件
const pageDir = path.resolve(srcRoot, 'page');
const mainFile = 'index.js';


function gethtmlArray(){
    let htmlArray = [];
    Object.keys(entryMap).forEach((key)=>{
        let fullPathName = path.resolve(pageDir,key);
        let fileName = path.resolve(fullPathName, key+'.html');

        //是否有template文件存在
        if(fs.existsSync(fileName)){
            htmlArray.push(new HtmlWebpackPlugin({
                filename : key+'.html',
                template: fileName,
                chunks: [key]//在生成的html文件中引入相应的js文件，如果是有两个key就相应的引入两个js文件
            }));
        }

    })
    return htmlArray;
}
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
const htmlArray = gethtmlArray(entryMap);

module.exports = {
    mode: "development",
    devServer: {
        contentBase: devPath//将dev的根目录设置成dev目录
    },
    entry: entryMap,
    resolve: {
        extensions: ['.js', '.jsx'] //可在引入时不加js或者jsx的扩展名
    },
    output: {
        path: devPath,
        filename: '[name].min.js'

    },
    module: {
        //配置loader
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{loader: 'babel-loader'}],//将es6代码转换成浏览器可识别代码的插件
                include: srcRoot
            },
            //css结尾的文件，加载css-loader（在include中的文件才会生效）
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: srcRoot
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader',{loader: 'sass-resources-loader', options:{ resources: srcRoot + '/component/common.scss'}}],
                include: srcRoot
            }, //后期还要安装sassloader
            {
                test: /\.(png|jpg|jpeg)$/,
                use: 'url-loader?limit=8192',
                include: srcRoot
            } //当图片小于8192，就会把图片转成base64进行加载，大于8192就原静态图片引入
        ]
    },
    plugins:[

    ].concat(htmlArray)
}