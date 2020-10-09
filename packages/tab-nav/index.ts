import { App } from 'vue'
import Comp from './tab-nav.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrTabNav = Comp
