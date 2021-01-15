import { App } from 'vue'
import Comp from './breadcrumb.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrBreadcrumb = Comp
