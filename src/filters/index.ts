import { VueConstructor } from 'vue/types/umd'
import * as filters from './methods'
export default {
  install(app: VueConstructor) {
    for (const key in filters) {
      app.filter(key, (filters as AnyObject)[key])
    }
  },
}
