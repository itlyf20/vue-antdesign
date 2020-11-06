import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	  {
		 path: '/',
		 redirect:"/login"
	  },
	  {
		path: '/login',
		name: 'login',
		component: () => import('../views/Login.vue')
	  },
	  {
		path: '/index',
		name: 'Index',
		component: () => import('../views/Index.vue'),
		children:[
			{
				path: '/money',
				name: 'Money',
				component: () => import('../views/money/Money.vue'),
			},
			{
				path: '/user',
				name: 'User',
				component: () => import('../views/user/User.vue'),
			}
		] 
	  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
