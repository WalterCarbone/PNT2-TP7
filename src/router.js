import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from './components/Fomulario'
import ApiRest from './components/ApiRest'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
      
        { path: '/formulario', component: Formulario },
        { path: '/apirest', component: ApiRest },
    ]
})