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