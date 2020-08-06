<template>
  <div>
    <router-link to="/">
      <img alt="Vue logo" src="../assets/logo.png" />
      <span>Azalea</span>
    </router-link>
  </div>
  <nav class="bg-white pt-3 pb-6" aria-label="Notifications">
    <ul class="filter-list js-notification-inboxes">
      <li>
        <router-link to="/components/design" class="filter-item">
          <span class="mr-2 text-center d-inline-block" style="width: 14px;">
            <Icon name="inbox"></Icon>
          </span>
          设计 Design
        </router-link>
      </li>
      <li>
        <a href="#" class="filter-item">
          <span class="mr-2 text-center d-inline-block" style="width: 14px;">
            <Icon name="bookmark"></Icon>
          </span>
          Saved
        </a>
      </li>
      <li>
        <a href="#" class="filter-item">
          <span class="mr-2 text-center d-inline-block" style="width: 14px;">
            <Icon name="check"></Icon>
          </span>
          Done
        </a>
      </li>
    </ul>
    <hr />
    <div class="border-0 py-2 m-0 d-flex" style="padding-right: 7px;">
      <span class="h6 text-gray pl-2 flex-auto">Filters</span>
    </div>
    <ul class="filter-list js-notification-sidebar-filters">
      <li>
        <a href="#" class="filter-item">
          <Icon name="mark-github"></Icon>
          人员管理
        </a>
      </li>
      <li>
        <a href="#" class="filter-item">
          <Icon name="mark-github"></Icon>
          模板管理
        </a>
      </li>
      <li>
        <a href="/notifications/beta?query=reason%3Aassign" class="filter-item">
          <span class="count text-normal"></span>
          🎯 Assigned
        </a>
      </li>
      <li>
        <a
          href="/notifications/beta?query=reason%3Aparticipating"
          class="filter-item"
        >
          <span class="count text-normal"></span>
          💬 Participating
        </a>
      </li>
      <li>
        <a
          href="/notifications/beta?query=reason%3Amention"
          class="filter-item"
        >
          <span class="count text-normal"></span>
          ✋ Mentioned
        </a>
      </li>
      <li>
        <a
          href="/notifications/beta?query=reason%3Ateam-mention"
          class="filter-item"
        >
          <span class="count text-normal"></span>
          🙌 Team mentioned
        </a>
      </li>
      <li>
        <a
          href="/notifications/beta?query=reason%3Areview-requested"
          class="filter-item"
        >
          <span class="count text-normal"></span>
          👀 Review requested
        </a>
      </li>
    </ul>

    <div class="">
      <hr />
      <p class="h6 border-0 text-gray py-2 pl-2 m-0">Repositories</p>
      <ul class="filter-list">
        <li>
          <a class="filter-item">
            <img
              class="avatar avatar-small mr-2 v-align-middle"
              height="16"
              width="16"
              alt="@vitejs"
              src=""
            />
            <span class="count text-normal">3</span>
            vitejs/vite
          </a>
        </li>
        <li>
          <a class="filter-item">
            <img
              class="avatar avatar-small mr-2 v-align-middle"
              height="16"
              width="16"
              alt="@DefinitelyTyped"
              src=""
            />
            <span class="count text-normal"></span>
            DefinitelyTyped/DefinitelyTyped
          </a>
        </li>
        <li>
          <a class="filter-item">
            <img
              class="avatar avatar-small mr-2 v-align-middle"
              height="16"
              width="16"
              alt="@vueComponent"
              src=""
            />
            <span class="count text-normal"></span>
            vueComponent/ant-design-vue
          </a>
        </li>
        <li>
          <a class="filter-item">
            <img
              class="avatar avatar-small mr-2 v-align-middle avatar-user"
              height="16"
              width="16"
              alt="@angela-1"
              src=""
            />
            <span class="count text-normal"></span>
            angela-1/canna
          </a>
        </li>
        <li>
          <a class="filter-item">
            <img
              class="avatar avatar-small mr-2 v-align-middle avatar-user"
              height="16"
              width="16"
              alt="@SteveSandersonMS"
              src=""
            />
            <span class="count text-normal"></span>
            SteveSandersonMS/WebWindow
          </a>
        </li>
        <li>
          <a class="filter-item">
            <img
              class="avatar avatar-small mr-2 v-align-middle avatar-user"
              height="16"
              width="16"
              alt="@a631807682"
              src=""
            />
            <span class="count text-normal"></span>
            a631807682/ele-next
          </a>
        </li>
        <li>
          <a class="filter-item">
            <img
              class="avatar avatar-small mr-2 v-align-middle"
              height="16"
              width="16"
              alt="@vuejs"
              src=""
            />
            <span class="count text-normal"></span>
            vuejs/vitepress
          </a>
        </li>
      </ul>
    </div>
    <hr />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '../../packages/icon'

export default defineComponent({
  name: 'TheName',
  components: {
    Icon
  }
})
</script>
