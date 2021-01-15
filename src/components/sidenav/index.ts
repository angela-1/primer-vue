import { App } from 'vue'
import Comp from './sidenav.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrSidenav = Comp
