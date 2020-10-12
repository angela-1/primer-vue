import { App } from 'vue'
import Comp from '../button/button-group.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrButtonGroup = Comp
