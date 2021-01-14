import { App } from 'vue'
import Comp from './button.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrButton = Comp
