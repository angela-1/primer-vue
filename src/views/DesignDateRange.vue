<template>
  <the-component>
    <template #title> date-range </template>
    <template #content>
      <p>Date range：{{ from }} - {{ to }}</p>
      <pr-date-range
        :from="from"
        :to="to"
        @date-change="dateChange"
      ></pr-date-range>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'
import { PrDateRange } from '../../packages/date-range'

export default defineComponent({
  name: 'DesignDateRange',
  components: {
    TheComponent,
    PrDateRange
  },
  setup() {
    const range = reactive({
      from: '',
      to: ''
    })
    const dateChange = (val: any) => {
      range.from = val.from
      range.to = val.to
      console.log('range change', range)
    }

    return {
      dateChange,
      ...toRefs(range)
    }
  }
})
</script>
