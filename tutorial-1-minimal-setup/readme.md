# A Minimal OWL Project Setup  
---

OWL is designed to be used with no tooling, so a static html is enough to run an OWL project. However, this tutorial demonstrates a minimal setup using the bundling tool Webpack.


## Prerequisite

To follow this setup, you need to have node installed.

To check if Node.js is installed on your system, run the following command in your terminal:

`node -v`

## Install Package

To build the project, you need a bundling tool like Webpack. Run the following command in your project directory to install webpack and webpack-cli:

`node install webpack webpack-cli ---save-dev`

This will create the following files and directories in your project:

- `package.json`
- `package-lock.json`
- `node_modules/`

The `--save-dev` flag indicates that these packages are used for development purposes (e.g., linters, testing libraries, etc.). You will find them listed under the `devDependencies` section in your `package.json`.

## Install Owl

To install the OWL package, run:

`npm install @odoo/owl --save`

## Directory Structure

This tutorial does not require any custom Webpack configuration. To allow Webpack to discover JS files and know where to output the bundled file, follow this directory structure:

```
owl-setup-tutoral  
    |- node_modules  
    |- package.json  
    |- package-lock.json  
    |- dist  
        |- index.html  
    |- src  
        |- index.js  
  
```
Make sure to name the folders and files exactly, especially src and dist, as Webpack relies on them by default.


## File contents

This tutorial creates a minimal OWL project that displays "Hello World" in the browser. Below are the contents of each file:

### index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Owlery</title>
</head>
<body>
    <script src="main.js"></script>
</body>
</html>
```

You may notice that main.js is not listed in the directory structure above. That file will be generated by Webpack during the build process.

### index.js

```
import { mount, Component, xml } from "@odoo/owl";

class Root extends Component {
    
    static template = xml`<h1>hello world</h1>`

}


mount(Root, document.body)
```

In this file:

- Root is an OWL component.

- The mount() function attaches the component to the DOM.

- The first argument is the root component, and the second is the DOM element to mount it into.

## Build process

To build and bundle your JS into a single file, run:

`npx webpack`

This will generate a `main.js` file in the `dist/` directory. The file will include your code and a bundled version of the OWL library.


## Run the project

To run the project, simply open dist/index.html in your browser.

You should see:
`Hello world`


### References

- [How to start an Owl project](https://github.com/odoo/owl/blob/master/doc/learning/quick_start.md)
- [Webpack Getting Started](https://webpack.js.org/guides/getting-started/)