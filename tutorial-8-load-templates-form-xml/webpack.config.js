const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWecpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'tutorial-8-load-templates-form-xml',
        }),
        new CopyWecpackPlugin({
            patterns: [
              { from: "./templates.xml", to: path.resolve(__dirname, 'dist') },
            ],
          }),

    ]
}