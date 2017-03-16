module.exports = {
    devtool: 'eval-source-map', //生成source-map合适的选项

    entry: __dirname + "/app/main.js", //唯一文件入口
    output: {
        path: __dirname + '/public', //打包后存放文件的地方
        filename: 'bundle.js' //打包后输出的文件名
    },

    devServer: {
        contentBase: "./public", //本地服务器加载页面所在的目录
        colors: true, //终端输出为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },

    module: { //在配置文件中添加JSON loader
        loaders: [{
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    }
}