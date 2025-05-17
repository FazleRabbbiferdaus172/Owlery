import { Component, mount, xml, loadFile } from "@odoo/owl";

class Display extends Component {

}

async function getTemplate() {
    const t =  await loadFile("./template/hello.xml")
    Display.template = xml`${t}`
}


(async function main() {
    await getTemplate()
    mount(Display, document.body)
})()