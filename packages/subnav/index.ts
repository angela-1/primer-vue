import { App } from 'vue'
import Comp from './subnav.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrSubnav = Comp
