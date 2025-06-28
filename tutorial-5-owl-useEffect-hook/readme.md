# Owl useEffect Hook

this guide demostrates how to use the useEffect hook in owl

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
import {App, Component, useState, useEffect, xml} from "@odoo/owl"

class Main extends Component {
    static template = xml`<div>
                                <h3 t-esc="state.value"/>
                                <h3><span>Timer: </span><span t-esc="timer.value"/></h3>
                            </div>`
    state = useState({value: "Initial Value"})
    timer = useState({value: 0})
    setup() {
        useEffect(() => {
            console.log("I am initially call but, never again")
            this.state.value = `Updated by Use Effect ${this.timer.value}`
        }, () => [])
        useEffect(() => {
            console.log("I am called initially and each time this.timer.value gets updated")
            const timer = setInterval( () => {console.log("interval called");this.timer.value += 1}, 1000)
            // what happens if you dont use the cleanup function? each time a new recurring interval is created and call back is 
            // executed multiple times and it increases each time not by 1 but by how many interval call back that is currently in the queue. 
            // So solution is to clear the interval before next useEffect function is run. following line does exactly that.
            return () => {console.log("I am clean");clearInterval(timer)}
        }, () => [this.timer.value])
    }
}

const app = new App(Main)
app.mount(document.body)
```

In owl, you must call hooks inside the **setup function** or in class **fields**. We have used useState and useEffect hooks in the code snippet. We used useState hook in class field and useEffect hook inside setup function.

The useEfftect hook takes 2 function as parameter. The **effect function** and the **dependency function**. The effect function can optionally return a clean up function. The clean up function will be run before the next useEffect call. 

If your dependency function return a empty array then this effect function will be called only once. Other wise if you include any class field as dependency this effect function will be call if any of the dependend fields are changed.


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