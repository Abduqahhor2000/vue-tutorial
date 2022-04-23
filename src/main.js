import { createApp } from "vue";
import App from "./App"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import components from "@/components/UI"
import router from "@/Router/index"

const app = createApp(App)

components.forEach((component)=>{
    app.component(component.name, component)
})

app
   .use(router)
   .mount("#app")