import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import getters from './getters'
import app, { App } from './modules/app'
import user, { User } from './modules/user'
Vue.use(Vuex)

export interface StoreData {
  app: App
  user: User
}
const store: Store<StoreData> = new Vuex.Store({
  modules: {
    app,
    user,
  },
  getters,
})

export default store
