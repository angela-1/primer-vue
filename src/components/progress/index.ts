import { App } from 'vue'
import Comp from './progress.vue'
export default (app: App): void => {
  app.component(Comp.name, Comp)
}
export const PrProgress = Comp
