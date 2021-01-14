import { App } from 'vue'
import Comp from './pagination.vue'
export default (app: App): void => {
  app.component(Comp.name, Comp)
}
export const PrPagination = Comp
