<template>
  <pr-icon name="mark-github"></pr-icon>
  <pr-alert>info</pr-alert>
  <pr-alert type="success"> <pr-icon name="rocket"></pr-icon>success </pr-alert>
  <pr-alert type="warn">
    <pr-icon name="shield-lock"></pr-icon>
    warn</pr-alert
  >
  <pr-alert type="error">
    <pr-icon name="flame"></pr-icon>
    error</pr-alert
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '../../packages/icon'
import { Alert } from '../../packages/alert'

export default defineComponent({
  name: 'Primer',
  components: {
    'pr-icon': Icon,
    'pr-alert': Alert
  }
})
</script>
