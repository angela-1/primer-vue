import { App } from 'vue'
import Comp from './src/index.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const SubnavItem = Comp
