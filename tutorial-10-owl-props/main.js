import { Component, App, xml } from "@odoo/owl";

class Child extends Component {
    static template = xml`<h1><t t-esc="props.first"/></h1>`
}

class Parent extends Component {
    static template = xml`<Child first="'Hello from props'"/>`
    static components = {Child}
}

const app = new App(Parent)
app.mount(document.body)