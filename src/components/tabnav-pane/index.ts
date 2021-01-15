import { App } from 'vue'
import Comp from '../tabnav/tabnav-pane.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrTabnavPane = Comp
