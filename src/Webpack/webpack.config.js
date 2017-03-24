//webpack配置文件
module.exports={
    devtool:'eval-source-map', //配置生成Source Maps，选择合适的选项
    entry:__dirname + "/app/main.js", //代码文件唯一入口
    output:{
        path:__dirname + "/public", //打包好的文件存放目录
        filename:"bundle.js"  //打包好的文件名称
    },
    module:{ //loader 模块加载器
        loaders:[ 
            {
                test:/\.json$/,
                loader:"json-loader"    //json解析器
            },{
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'/*, //使用bebel将es2015 转换为es5 
                query:{ //该项具体可移动到单独的文件中命名为.babelrc
                    presets:['es2015','react'] //解析Es6的babel-preset-es2015包和解析JSX的babel-preset-react包
                } */
            },{
                 test: /\.css$/,
                 loader: 'style-loader!css-loader?modules'//添加对样css式表的处理 !感叹号的作用在于使同一文件能够使用不同类型的loader
            }
        ]
    },

    plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"  //new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin() //热加载插件
  ],
    devServer:{ //构建本地服务器
        port:3000, //不指定 默认为8080
        contentBase:"./public", //本地服务器页面的目录
        colors:true, //终端输出为彩色
        historyApiFallback:true, //不跳转页面，始终指向index
        inline:true //实时刷新页面
    }
}