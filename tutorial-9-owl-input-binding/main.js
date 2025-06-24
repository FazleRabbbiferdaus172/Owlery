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

