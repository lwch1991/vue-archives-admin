import Vue from 'vue'

// import VueDND from 'awe-dnd'
// import style
import 'normalize.css/normalize.css'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

// Vue.use(VueDND)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
