<template>
  <the-component>
    <template #title> 设计 </template>
    <template #content>
      <p>TODO</p>
      <ul>
        <li>
          <router-link to="/components/icon"> icon </router-link>
        </li>
        <li>
          <router-link to="/components/button"> button </router-link>
        </li>
        <li>
          <router-link to="/components/date-range"> date-range </router-link>
        </li>
        <li>
          <router-link to="/components/pagination"> pagination </router-link>
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
  }
});
</script>
