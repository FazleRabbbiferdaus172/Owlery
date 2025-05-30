import {App, Component, xml} from "@odoo/owl"

class Child extends Component {
    static template = xml`<h2>Hi, I am Chlid</h2>`
}

class Parent extends Component {
    static template = xml`<h1>Hi, I am Parent</h1>
                            <Child/>`
    static components = {Child}
}


class MainComponenet extends Component {
    static template = xml`<Parent/>`
    static components = {Parent}
}

const app = new App(MainComponenet)
app.mount(document.body)