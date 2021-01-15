import { App } from 'vue'
import { Button } from '../packages/button'
import { ButtonGroup } from '../packages/button-group'
import { Icon } from '../packages/icon'

const components = [
  Button,
  ButtonGroup,
  Icon
]

export const install = function (app: App, opts = {}) {
  components.forEach((component)=>{
    app.component(component.name, component);
  })
}
export const version = '0.0.2'

