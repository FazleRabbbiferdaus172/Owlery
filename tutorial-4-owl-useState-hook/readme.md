# Owl UseState Hook

this guide demostrates how to use the useState hook in owl


### Webpack Configuration

Create `webpack.config.js` in the project root:
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Tutorial 3 Sub component demo' }),
    ]
};
```
Core: Configures Webpack for development mode, sets ./main.js as the entry, outputs bundled main.js to a clean dist folder. HtmlWebpackPlugin generates index.html with the script injected.

### Build and View

in termial write the following command and press enter.
```
webpack
```

Webpack bundles assets into the dist folder and HtmlWebpackPlugin creates dist/index.html

## View:
Open `dist/index.html` in a web browser to see something like the following image.