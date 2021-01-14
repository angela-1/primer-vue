import { App } from 'vue'
import Comp from '../sidenav/sidenav-subitems.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrSidenavSubitems = Comp
