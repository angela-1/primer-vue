<template>
  <div class="d-flex flex-row no-wrap flex-items-center">
    <span>日期：</span
    ><input
      type="date"
      placeholder="开始日期"
      class="form-control input-sm"
      v-model="from"
      @change="rangeChange('from')"
      @keyup.enter="submit"
    />
    <span class="mx-2"> 至 </span>
    <input
      type="date"
      placeholder="结束日期"
      class="form-control input-sm"
      v-model="to"
      @change="rangeChange('to')"
      @keyup.enter="submit"
    />
    <button type="button" @click="submit" class="btn btn-sm ml-2">查询</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'PrDateRange',
  props: {
    from: {
      type: String
    },
    to: {
      type: String
    }
  },
  emits: ['date-change'],
  setup(props, ctx) {
    const from: string = props.from ?? '';
    const to: string = props.from ?? '';
    const { range, rangeChange } = useDateRange(from, to);

    const submit = () => {
      console.log('submit date', range);
      ctx.emit('date-change', range);
    };
    return {
      ...toRefs(range),
      rangeChange,
      submit
    };
  }
});

function useDateRange(from: string, to: string) {
  const range = reactive({
    from,
    to
  });

  const validateDateRange = (targetValue: string): void => {
    const fromDate = dayjs(range.from);
    const toDate = dayjs(range.to);
    if (toDate.isBefore(fromDate)) {
      if (targetValue === 'from') {
        range.to = range.from;
      } else {
        range.from = range.to;
      }
    }
    console.log('range', range);
  };

  const rangeChange = (targetValue: string) => {
    validateDateRange(targetValue);
  };

  return {
    range,
    rangeChange
  };
}
</script>
