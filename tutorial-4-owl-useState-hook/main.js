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