import Vue from 'vue'

import App from './App.vue'
import Lista from './components/Lista.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueCordova from 'vue-cordova'
Vue.use(VueCordova)


Vue.use(Vuetify)


new Vue({
  el: '#app',
 
  render: h => h(App)
  
})




