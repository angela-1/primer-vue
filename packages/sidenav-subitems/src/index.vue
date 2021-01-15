<template>
  <li class="sidebar-category list-style-none">
    <details class="dropdown-withArrow details details-reset" open="">
      <summary>
        <div class="d-flex flex-justify-between">
          <a
            href="#"
            class="pl-4 pr-2 py-2 f6 text-uppercase d-block flex-auto mr-3"
          >
            {{ title }}
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="octicon flex-shrink-0 arrow mr-3"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            style="margin-top: 7px"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
            ></path>
          </svg>
        </div>
      </summary>
      <ul class="sidebar-articles list-style-none">
        <slot></slot>
      </ul>
    </details>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PrSidenavSubitems',
  props: {
    title: {
      type: String,
      required: true
    }
  }
});
</script>
