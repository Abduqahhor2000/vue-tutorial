import { createApp } from "vue";
import App from "./App"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import components from "@/components/UI"

const app = createApp(App)

components.forEach((component)=>{
    app.component(component.name, component)
})

app.mount("#app")