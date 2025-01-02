import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/Dashboard.vue";
import AboutView from "../views/About.vue";

const routes = [
    { path:'', component: DashboardView},
    { path:'/about', component: AboutView}
]

const route = createRouter({
    history: createWebHistory(),
    routes
})

export default route;