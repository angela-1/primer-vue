import { App } from 'vue'
import { Button } from '../packages/button'
import { ButtonGroup } from '../packages/button-group'
import { DateRange } from '../packages/date-range'
import { Icon } from '../packages/icon'
import { Label } from '../packages/label'
import { Pagination } from '../packages/pagination'
import '@primer/css/index.scss'

const components = [
  Button,
  ButtonGroup,
  DateRange,
  Icon,
  Label,
  Pagination
]

export const install = function (app: App, opts = {}) {
  components.forEach((component)=>{
    app.component(component.name, component);
  })
}
export const version = '0.0.2'

