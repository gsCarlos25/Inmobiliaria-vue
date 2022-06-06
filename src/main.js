import { createApp } from 'vue'
import App from './App.vue'
import  ofertas from './components/ofertas.vue'
import principal from './components/principal.vue'
import perfil from './components/perfil.vue'
import privado from './components/privado.vue'
import alquiler from './components/alquiler.vue'
import compra from './components/compra.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import componente from './components/oferta.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone,faBed,faBath,faCompass,faLock,faUser,faEye,faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone,faBed,faBath,faCompass,faLock,faUser,faEye,faTag);

const routes = [
    { path: '/', component: principal },
    { path: '/ofertas', component: ofertas },
    { path: '/componente/:id/', component: componente },
    { path: '/perfil', component: perfil},
    { path: '/privado', component: privado},
    { path: '/alquiler', component: alquiler},
    { path: '/compra', component: compra},
  ]

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const app = createApp(App);

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')


