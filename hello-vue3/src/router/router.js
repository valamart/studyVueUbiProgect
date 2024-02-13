import Main from "../pages/Main.vue";
import PostPage from "../pages/PostPage.vue";
import About from "../pages/About.vue";
import PostIdPage from "../pages/postIdPage.vue"
import PostPageWithStore from "../pages/PostPageWithStore.vue";
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        name:'PostIdPage',
        component: PostIdPage,
        props: true
    },
    {
        path: '/store',
        component: PostPageWithStore
    }
]

const router = createRouter({
    routes,
    history: createWebHistory('http://localhost:5173')
})

export default router
