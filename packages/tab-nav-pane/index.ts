import { App } from 'vue'
import Comp from '../tab-nav/tab-nav-pane.vue'
export const install = function (app: App) {
  app.component(Comp.name, Comp)
}

export const PrTabNavPane = Comp