<template>
  <div class="d-flex flex-items-center p-4" style="z-index: 3" id="github-logo">
    <router-link to="/" class="text-white">
      <pr-icon name="mark-github" :size="32"></pr-icon>
    </router-link>
    <router-link
      to="/"
      class="h4-mktg text-white no-underline no-wrap pl-2 flex-auto"
    >
      Primer Vue
    </router-link>
  </div>

  <ul class="sidebar-products">
    <li title="安装" class="sidebar-product mb-2">
      <a href="/" class="pl-4 pr-5 pb-1 f4"> 安装 </a>
    </li>
    <li title="开始使用" class="sidebar-product mb-2">
      <a href="/" class="pl-4 pr-5 pb-1 f4"> 开始使用 </a>
    </li>
    <ul class="sidebar-categories list-style-none">
      <li class="sidebar-category py-1 active">
        <details class="dropdown-withArrow details details-reset" open="">
          <summary>
            <div class="d-flex flex-justify-between">
              <a
                href="/"
                class="pl-4 pr-2 py-2 f6 text-uppercase d-block flex-auto mr-3"
                >指南</a
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="octicon flex-shrink-0 arrow mr-3"
                style="margin-top: 7px"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                ></path>
              </svg>
            </div>
          </summary>

          <!-- some categories have maptopics with child articles -->

          <ul class="sidebar-articles list-style-none">
            <li class="sidebar-article active is-current-page">
              <a href="/" class="pl-4 pr-5 py-1"> 生成文档 </a>
            </li>

            <li class="sidebar-article">
              <a href="/" class="pl-4 pr-5 py-1"> 模板下载 </a>
            </li>
          </ul>
        </details>
      </li>

      <li class="sidebar-category py-1">
        <details class="dropdown-withArrow details details-reset" open="">
          <summary>
            <div class="d-flex flex-justify-between">
              <a
                href="/"
                class="pl-4 pr-2 py-2 f6 text-uppercase d-block flex-auto mr-3"
              >
                组件
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="octicon flex-shrink-0 arrow mr-3"
                style="margin-top: 7px"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                ></path>
              </svg>
            </div>
          </summary>

          <!-- some categories have maptopics with child articles -->

          <ul class="sidebar-articles list-style-none">
            <li class="sidebar-article">
              <a href="/" class="pl-4 pr-5 py-1"> 节能审查 </a>
            </li>

            <li class="sidebar-article">
              <a href="/" class="pl-4 pr-5 py-1"> 专家库 </a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PrIcon } from '../../packages/icon'

export default defineComponent({
  name: 'TheName',
  components: {
    PrIcon
  }
})
</script>
