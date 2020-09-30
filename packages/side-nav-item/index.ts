import { App } from 'vue'
import Comp from '../side-nav/side-nav-item.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrSideNavItem = Comp
