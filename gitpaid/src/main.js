import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueVideoPlayer from 'vue-video-player'
import router from '@/router'
import auth from '@/auth'

Vue.use(auth)

Vue.config.productionTip = false

Vue.use(VueVideoPlayer)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
