import { createWebHistory, createRouter } from "vue-router"
import { getPageTitle } from '@/utils/utils'
import Layout from '@/layout/index.vue'
import LayoutPage from '@/layout/page.vue'

const routes: Array<any> = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                name: 'home',
                path: '',
                component: () => import('@/views/home.vue'),
                meta: { title: '首页' }
            }
        ]
    },
    {
        path: '/about',
        component: LayoutPage,
        children: [
            {
                name: 'about',
                path: '',
                component: () => import('@/views/about.vue'),
                meta: { title: '关于我们' }
            }
        ]
    },
    {
        name: 'not-found',
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/notFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由跳转前
router.beforeEach((to: any, from, next) => {
    // set page title
    document.title = getPageTitle(to.meta.title)
    next()
})

// 路由跳转后
router.afterEach((to, from, next) => {

})

export default router