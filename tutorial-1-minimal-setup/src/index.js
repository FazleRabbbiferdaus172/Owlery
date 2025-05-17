import { mount, Component, xml } from "@odoo/owl";

class Root extends Component {
    
    static template = xml`<h1>hello world</h1>`

}


mount(Root, document.body)