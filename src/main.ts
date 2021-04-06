import Vue from 'vue'
import App from './App.vue'

import Methods from '@/plugins/methods'
import Global from '@/plugins/global'
import UView from '@/plugins/uview'
import Filter from '@/filters/index'
Vue.config.productionTip = false
Vue.use(Methods).use(Global).use(UView).use(Filter)

new App().$mount()
