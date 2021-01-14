import { App } from 'vue'
import Comp from './date-range.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrDateRange = Comp
