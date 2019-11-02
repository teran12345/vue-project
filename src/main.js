import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'    
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@/plugins/echarts";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash'

const options = { name: 'lodash' } 

Vue.use(VueLodash, options)

 
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)


library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
