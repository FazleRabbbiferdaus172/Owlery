# Owl Passing Componenet Using Slot
This guide demostrates how to pass components using default slot and named slot

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
import {App, Component, xml} from "@odoo/owl"

class Child extends Component {
    static template = xml`<span style="background-color: red">I am child </span>`
}

class DefaultSlotedComponnent extends Component {
    static template = xml`<div style="background-color: blue">
                            <h3>I am default sloted component and my slot conents are <t t-slot="default"></t>...........</h3>
                        </div>`
}

class NamedSlotedComponent extends Component {
    static template = xml`<div style="background-color: green">
                            <h3>I am name component, and my stol contents are show below</h3>
                            <h4>Contented of slot with name slot1</h4>
                            <t t-slot="slot1"></t>
                            <h4>Contented of slot with name slot2</h4>
                            <t t-slot="slot2"></t>
                            <h3>Named component end here</h3>
                        </div>`
}

class Main extends Component {
    static template = xml`<div style="background-color: black">
                                <DefaultSlotedComponnent>
                                    <Child/>
                                </DefaultSlotedComponnent>
                                <NamedSlotedComponent>
                                    <t t-set-slot="slot1">
                                        <Child/><span>slot1 ends.</span>
                                    </t>
                                    <t t-set-slot="slot2">
                                        <Child/><span>slot2 ends.</span>
                                    </t>
                                </NamedSlotedComponent>
                            </div>
                            `
    static components = {DefaultSlotedComponnent, Child, NamedSlotedComponent}
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