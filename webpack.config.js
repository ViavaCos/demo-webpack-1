// 引入path模块处理路径问题
const path = require('path')

const config = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, './dist'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.png$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}

module.exports = config