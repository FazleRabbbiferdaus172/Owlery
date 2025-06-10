# Owl UseState Hook

this guide demostrates how to use the useState hook in owl

## Prerequisites & Tools
Node.js and npm (or yarn): From nodejs.org.

## Key npm packages:
- @odoo/owl (OWL framework)
- webpack
- webpack-cli
- html-webpack-plugin

## Setup Steps

### Project Initialization

Create Directory:
```
mkdir your-directory-name
cd your-directory-name
```

Initialize npm:
```
npm init -y
```
Install Dependencies:
```
npm install @odoo/owl
npm install --save-dev webpack webpack-cli html-webpack-plugin
```

### OWL Application (main.js)

Create `main.js` in the project root:

```
import {App, Component, useState, xml} from "@odoo/owl"

class Main extends Component {
    static template = xml`
                        <div>
                            <button t-on-click="incrementCount" style="width: 3rem">+</button>
                            <span t-esc="state.count" style="padding: 0px 25px"/>
                            <button t-on-click="decrementCount" style="width: 3rem">-</button>
                        </div>                        
                        `
    state = useState({count: 0})

    incrementCount() {
        this.state.count += 1
    }

    decrementCount() {
        this.state.count -= 1
    }
}

const app = new App(Main)
app.mount(document.body)
```


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