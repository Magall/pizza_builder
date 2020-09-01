import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/bebidas',
    name: 'Bebidas',
    component: () => import('../views/Bebidas/Bebidas.vue')
  },
  {
    path: '/pedido',
    name: 'Pedido',
    component: () => import('../views/Pedido/Pedido.vue')
  },
  {
    path: '/dadosEntrega',
    name: 'DadosEntrega',
    component: () => import('../views/DadosEntrega/DadosEntrega.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
