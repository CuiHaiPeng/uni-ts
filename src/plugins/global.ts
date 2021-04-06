import store from '@/store/index'
import { VueConstructor } from 'vue/types/umd'
export default {
  install(app: VueConstructor) {
    app.prototype.$s = store
  },
}
