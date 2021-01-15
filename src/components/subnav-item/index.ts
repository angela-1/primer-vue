import { App } from 'vue'
import Comp from '../subnav/subnav-item.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrSubnavItem = Comp
