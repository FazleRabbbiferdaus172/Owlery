const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWecpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dynamic template loading'
        }),
        new CopyWecpackPlugin({
            patterns: [
              { from: "./src/template", to: path.resolve(__dirname, 'dist', 'template') },
            ],
          }),
    ]
}