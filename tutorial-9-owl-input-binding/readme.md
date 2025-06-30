# Owl input binding
This file will contain tutorial to demonstrate input binding in owl
demonstration of uncontrolled input and controlled input

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
import { Component, App, useState, useRef, xml } from "@odoo/owl";


class ControlledInput extends Component {
    static template = xml`
        <div style="border: solid black 2px">
            <h1>Controlled input</h1>
            <input type="text" t-on-input="updateState"/>
            <p t-esc="state.value"/>
        </div>
    `
    state = useState({value: ""})
    updateState(ev) {
        this.state.value = ev.target.value
    }
}

class UncontrolledInput extends Component {
    static template = xml`
        <div style="border: solid black 2px">
            <h1>Uncontrolled input</h1>
            <input type="text" t-on-change="updateState" t-ref="input"/>
            <p t-ref="box"/>
        </div>
    `
    textInput = useRef("input")
    textBox = useRef("box")
    updateState(ev) {
        console.log(this.textInput.el.value, ev.target.value)
        this.textBox.el.innerText = ev.target.value
    }
}

class Main extends Component {
     static template = xml`
        <div>
            <ControlledInput/>
            <UncontrolledInput/>
        </div>
    `
    static components = { ControlledInput, UncontrolledInput }

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
