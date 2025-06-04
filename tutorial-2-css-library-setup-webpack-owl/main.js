import { mount, Component, xml } from "@odoo/owl";
import "./style.css"

class Root extends Component {
    
    static template = xml`<h1 class="title">Hello OWL!</h1>`

}


mount(Root, document.body)