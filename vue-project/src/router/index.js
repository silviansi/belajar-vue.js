import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/Dashboard.vue";
import AboutView from "../views/About.vue";
import UserView from "../views/User.vue";
import UserDetailView from "../views/UserDetail.vue";
import UserProfileView from "../views/UserProfile.vue";
import UserPostView from "../views/UserPost.vue";
import UserIndexView from "../views/UserIndex.vue";

const routes = [
    { path:'', component: DashboardView},
    { path:'/about', component: AboutView},
    { path: '/user', component: UserView },
    // Routing with parameter
    // { path: '/user/:id', component: UserDetailView },
    // { path: '/user/:id/profile', component: UserProfileView },
    // { path: '/user/:id/post', component: UserPostView },
    // Routing nested
    { path: '/user/:id', 
        component: UserIndexView,
        children: [
            {
                path: '',
                component: UserDetailView
            },
            {
                path: 'profile',
                component: UserProfileView
            },
            {
                path: 'post',
                component: UserPostView
            }
        ]}
]

const route = createRouter({
    history: createWebHistory(),
    routes
})

export default route;