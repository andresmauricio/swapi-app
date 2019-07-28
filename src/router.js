import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Humano from './views/Personas.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   
    {
      path: '/about',
      name: 'about',
      
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path :'/personas',
      name :'personas',
      component: () => import(/* webpackChunkName: "personas" */ './views/Personas.vue')
    },
    {
      path :'/planetas',
      name :'planetas',
      component: () => import(/* webpackChunkName: "personas" */ './views/Planetas.vue')
    },
    {
      path :'/peliculas',
      name :'peliculas',
      component: () => import(/* webpackChunkName: "personas" */ './views/Peliculas.vue')
    },
    {
      path :'/busqueda',
      name :'busqueda',
      component: () => import(/* webpackChunkName: "personas" */ './views/Busqueda.vue')
    },
  ]
})
