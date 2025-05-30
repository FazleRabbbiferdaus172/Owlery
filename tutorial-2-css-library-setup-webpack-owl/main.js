import { mount, Component, xml } from "@odoo/owl";
import 'bulma/css/bulma.css'

class Root extends Component {
    
    static template = xml`<h1 class="title">Tutorial 2: css library setup webpack owl</h1>`

}


mount(Root, document.body)