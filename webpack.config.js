module.exports = {
    entry:['@babel/polyfill','./app/src/main.js'], 
    output:{
        path:__dirname + '/app/public',
        filename:'bundle.js'
    },
    devServer:{
        contentBase:__dirname + '/app/public',
        compress: true,
        port: 9000
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
            }
        }],
    }
    
}