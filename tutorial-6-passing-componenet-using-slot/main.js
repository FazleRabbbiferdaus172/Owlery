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