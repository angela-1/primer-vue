<template>
  <the-component>
    <template #title> 设计 </template>
    <template #content>
      <p>TODO</p>
      <ul>
        <li v-for="comp of components" :key="comp">
          <router-link :to="`/components/${comp}`"> {{ comp }}</router-link>
        </li>
      </ul>
    </template>
    
  </the-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheComponent from '../layouts/TheComponent.vue';

export default defineComponent({
  name: 'Design',
  components: {
    TheComponent
  },
  setup() {
    const components = ['icon', 'button', 'date-range', 'pagination', 'label'];
    return {
      components
    };
  }
});
</script>
