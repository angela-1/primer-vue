<template>
  <the-component>
    <template #title> button </template>
    <template #content>
      <div class="button-container">
        <h2>Default button</h2>
        <pr-button>Button button</pr-button>
        <h2>Primary button</h2>
        <pr-button type="primary">Primary button</pr-button>
        <h2>Danger button</h2>
        <pr-button type="danger">Danger button</pr-button>
        <h2>Outline button</h2>
        <pr-button size="small" type="outline">Outline button</pr-button>
        <h2>Large button</h2>
        <pr-button size="large" type="danger">large danger button</pr-button>
        <h2>Disabled state</h2>
        <pr-button :disabled="true">Disabled button</pr-button>
        <pr-button :disabled="true" type="primary">Disabled button</pr-button>
        <h2>Block button</h2>
        <pr-button type="block"> Block button </pr-button>
        <h2>Link button</h2>
        <pr-button type="link">Link button</pr-button>
        <h2>Invisible button</h2>
        <pr-button type="invisible">Cancel</pr-button>
        <pr-button>Submit</pr-button>
        <h2>Octicon button</h2>
        <pr-button type="octicon">
          <pr-icon name="device-desktop"></pr-icon>
        </pr-button>
        <pr-button type="octicon">
          <pr-icon name="pencil"></pr-icon>
        </pr-button>
        <pr-button type="octicon">
          <pr-icon name="trash"></pr-icon>
        </pr-button>
        <pr-button type="octicon">
          <pr-icon name="kebab-horizontal"></pr-icon>
        </pr-button>
        <h2>Close button</h2>
        <pr-button type="octicon">
          <pr-icon name="x"></pr-icon>
        </pr-button>
        <h2>Button with icons</h2>
        <pr-button>
          <pr-icon name="search"></pr-icon>
        </pr-button>
        <pr-button type="primary">
          <pr-icon name="download"></pr-icon>
          <span>Clone</span>
          <span class="dropdown-caret"></span>
        </pr-button>
        <pr-button type="danger">
          <pr-icon name="trash"></pr-icon>
          <span>Delete</span>
        </pr-button>
        <pr-button type="outline">
          <pr-icon name="device-desktop"></pr-icon>
          <span>Open in Desktop</span>
        </pr-button>
        <pr-button type="outline">
          <pr-icon name="pencil"></pr-icon>
        </pr-button>
        <h2>Button with counter</h2>
        <pr-button type="outline">
          Counter Button <span class="Counter">12</span>
        </pr-button>
        <h2>Button groups</h2>
        <pr-button-group>
          <pr-button>
            <pr-icon name="device-desktop"></pr-icon>
            <span>Open in Desktop</span>
          </pr-button>
          <pr-button>
            <pr-icon name="pencil"></pr-icon>
          </pr-button>
          <pr-button>
            Counter Button <span class="Counter">12</span>
          </pr-button>
        </pr-button-group>
        <pr-button-group>
          <pr-button>
            <pr-icon name="pencil"></pr-icon>
          </pr-button>
          <pr-button>
            <pr-icon name="trash"></pr-icon>
          </pr-button>
          <pr-button>
            <pr-icon name="download"></pr-icon>
          </pr-button>
        </pr-button-group>
      </div>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'
import { PrButton } from '../../packages/button'
import { PrButtonGroup } from '../../packages/button-group'
import { PrIcon } from '../../packages/icon'

export default defineComponent({
  name: 'DesignButton',
  components: {
    TheComponent,
    PrButton,
    PrButtonGroup,
    PrIcon
  },
  setup() {}
})
</script>

<style lang="scss" scoped>
.button-container > * {
  margin-right: 8px;
}
</style>
