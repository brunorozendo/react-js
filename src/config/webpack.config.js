const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = true;

module.exports = {
    mode: "development",
    entry: {main: path.resolve('src', 'main', 'root', 'index.js')},
    output: {
        path: path.resolve('build'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.css$/,
                use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, 'css-loader']
             }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ]
};