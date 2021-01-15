import type { App } from 'vue';
import { Icon } from '../packages/icon';
import { Button } from '../packages/button';
// import { PrAlert } from '../packages/alert';
// import { PrSubnav } from '../packages/subnav';
// import { PrSubnavItem } from '../packages/subnav-item';

const components = [Button, Icon]//, PrAlert, PrSubnav, PrSubnavItem];

const install = function (app: App, _: any): void {
  console.log('app', app);

  components.forEach((component) => {
    app.component(component.name, component);
    console.log('reg', component, component.name);
  });
};

// export { PrIcon, PrButton };

export default {
  install,
};
