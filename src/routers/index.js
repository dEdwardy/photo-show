import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
        {
            path:'/',
            component: () => import('../views/Index') 
        },{
            path: '/test1',
            component: () => import('../components/FileUpload/FileUpload') 
        },{
            path: '/test2',
            component: () => import('../views/Test/Test') 
        },{
            path: '/surprise',
            component: () => import('../views/Surprise/Surprise') 
        },{
            path: '/customLoading',
            component: () => import('@/components/CustomLoading/CustomLoading')
        },{
            path: '/*',
            component: () => import('../views/Index') 
        }
    ]
})

export default router;