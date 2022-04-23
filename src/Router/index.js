import Main from "@/container/Main"
import Home from "@/container/Home"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/home",
        component: Home,
    },
]

const router = createRouter({
        routes,
        history: createWebHistory(process.env.BASE_URL)
    })

    export default router;