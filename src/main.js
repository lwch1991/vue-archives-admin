import Vue from 'vue'

import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'

// import style
import 'normalize.css/normalize.css'
import './scss/index.scss'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
