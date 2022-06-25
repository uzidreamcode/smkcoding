    import { createRouter, createWebHistory } from "vue-router";
    
    import Home from "@/view/HomePage.vue"
    import About from "@/view/AboutPage.vue"
    
    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about/:id',
            name: 'About',
            component: About
        },
    ]
    
    const router = createRouter({
        history: createWebHistory(),
        routes
    })
    
    export default router