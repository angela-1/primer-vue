import { App } from 'vue'
import Comp from './label.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrLabel = Comp
