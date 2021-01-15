import { App } from 'vue'
import Comp from './icon.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrIcon = Comp
