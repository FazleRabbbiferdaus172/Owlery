import { Component, mount, xml, loadFile } from "@odoo/owl";
import { Child } from "./child";

class Display extends Component {
    static components = {Child}
    //static template = xml`<h1>Hello World</h1>`
    // constructor (...args) {
    //     super(...args)
    //     this.template = args[1].templates
    // }
    // setup() {
    //     this.template = this.env.templates
    //     console.log("hi")
    // }
}

async function getTemplate() {
    debugger
    const t =  await loadFile("./template/display.xml")
    console.log(t)
    Display.template = xml`${t}`
    return t
}


(async function main() {
    await getTemplate()
    mount(Display, document.body)
})()