import type { App } from 'vue';
import { PrIcon } from '../packages/icon';
import { PrButton } from '../packages/button';
import { PrAlert } from '../packages/alert';

const components = [PrButton, PrIcon, PrAlert];

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
