import { App } from 'vue'
import Comp from '../side-nav/side-nav-sub-items.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrSideNavSubItems = Comp
