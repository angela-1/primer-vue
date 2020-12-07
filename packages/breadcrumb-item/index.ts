import { App } from 'vue'
import Comp from '../breadcrumb/breadcrumb-item.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrBreadcrumbItem = Comp
