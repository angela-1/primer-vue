import { App } from 'vue'
import Comp from '../sidenav/sidenav-item.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrSidenavItem = Comp
