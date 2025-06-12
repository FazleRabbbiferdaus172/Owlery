import {App, Component, loadFile, whenReady} from "@odoo/owl"


class Main extends Component {
    static template = "Main"
}


async function start() {
    const [templates] = await Promise.all([loadFile("./templates.xml"), whenReady()])
    const app = new App(Main)
    app.addTemplates(templates)
    await app.mount(document.body)
}

start()

