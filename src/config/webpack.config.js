const path = require('path');

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
            }
        ]
    }
};