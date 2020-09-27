import { App } from 'vue'
import Comp from './alert.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrAlert = Comp
