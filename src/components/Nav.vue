<template>
  <div
    class="d-flex flex-column"
    style="position: absolute; bottom: 20px; top: 55px; overflow: scroll;"
  >
    <nav
      class="bg-white height-full notification-navigation pt-3 pb-6"
      aria-label="Notifications"
    >
      <ul class="filter-list js-notification-inboxes">
        <li>
          <a href="/notifications/beta" class="filter-item selected">
            <span class="mr-2 text-center d-inline-block" style="width: 14px;">
              <svg
                class="octicon octicon-inbox"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.8 2.06A1.75 1.75 0 014.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395a.75.75 0 01.06.295v4.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25v-4.5a.75.75 0 01.06-.295L2.8 2.06zm1.61.44a.25.25 0 00-.23.152L1.887 8H4.75a.75.75 0 01.6.3L6.625 10h2.75l1.275-1.7a.75.75 0 01.6-.3h2.863L11.82 2.652a.25.25 0 00-.23-.152H4.41zm10.09 7h-2.875l-1.275 1.7a.75.75 0 01-.6.3h-3.5a.75.75 0 01-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V9.5z"
                ></path>
              </svg>
            </span>
            <span class="count text-normal"></span>
            Inbox
          </a>
        </li>
        <li>
          <a href="/notifications/beta?query=is%3Asaved" class="filter-item">
            <span class="mr-2 text-center d-inline-block" style="width: 14px;">
              <svg
                class="octicon octicon-bookmark"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.75 2.5a.25.25 0 00-.25.25v9.91l3.023-2.489a.75.75 0 01.954 0l3.023 2.49V2.75a.25.25 0 00-.25-.25h-6.5zM3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 01-1.227.579L8 11.722l-3.773 3.107A.75.75 0 013 14.25V2.75z"
                ></path>
              </svg>
            </span>
            Saved
          </a>
        </li>
        <li>
          <a href="/notifications/beta?query=is%3Adone" class="filter-item">
            <span class="mr-2 text-center d-inline-block" style="width: 14px;">
              <svg
                class="octicon octicon-check"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                ></path>
              </svg>
            </span>
            Done
          </a>
        </li>
      </ul>
      <hr />
      <div class="border-0 py-2 m-0 d-flex" style="padding-right: 7px;">
        <span class="h6 text-gray pl-2 flex-auto">组件</span>
      </div>
      <ul class="filter-list js-notification-sidebar-filters">
        <li>
          <router-link to="/components/primer" class="filter-item"
            >Icon 图标</router-link
          >
        </li>
        <li>
          <router-link to="/components/alert" class="filter-item"
            >Alert 提示</router-link
          >
        </li>
        <li>
          <router-link to="/components/label" class="filter-item"
            >Label 标签</router-link
          >
        </li>
      </ul>

      <div class="js-notification-sidebar-repositories">
        <hr />
        <p class="h6 border-0 text-gray py-2 pl-2 m-0">Repositories</p>
        <ul class="filter-list">
          <li>
            <a
              href="/notifications/beta?query=repo%3AvueComponent%2Fant-design-vue"
              class="filter-item"
            >
              <img
                class="avatar avatar-small mr-2 v-align-middle"
                height="16"
                width="16"
                alt="@vueComponent"
              />
              <span class="count text-normal"></span>
              vueComponent/ant-design-vue
            </a>
          </li>
          <li>
            <a
              href="/notifications/beta?query=repo%3Aangela-1%2Fcanna"
              class="filter-item"
            >
              <img
                class="avatar avatar-small mr-2 v-align-middle avatar-user"
                height="16"
                width="16"
                alt="@angela-1"
              />
              <span class="count text-normal"></span>
              angela-1/canna
            </a>
          </li>
          <li>
            <a
              href="/notifications/beta?query=repo%3ASteveSandersonMS%2FWebWindow"
              class="filter-item"
            >
              <img
                class="avatar avatar-small mr-2 v-align-middle avatar-user"
                height="16"
                width="16"
                alt="@SteveSandersonMS"
              />
              <span class="count text-normal"></span>
              SteveSandersonMS/WebWindow
            </a>
          </li>
          <li>
            <a
              href="/notifications/beta?query=repo%3Aa631807682%2Fele-next"
              class="filter-item"
            >
              <img
                class="avatar avatar-small mr-2 v-align-middle avatar-user"
                height="16"
                width="16"
                alt="@a631807682"
              />
              <span class="count text-normal"></span>
              a631807682/ele-next
            </a>
          </li>
          <li>
            <a
              href="/notifications/beta?query=repo%3Avitejs%2Fvite"
              class="filter-item"
            >
              <img
                class="avatar avatar-small mr-2 v-align-middle"
                height="16"
                width="16"
                alt="@vitejs"
              />
              <span class="count text-normal"></span>
              vitejs/vite
            </a>
          </li>
          <li>
            <a
              href="/notifications/beta?query=repo%3Avuejs%2Fvitepress"
              class="filter-item"
            >
              <img
                class="avatar avatar-small mr-2 v-align-middle"
                height="16"
                width="16"
                alt="@vuejs"
              />
              <span class="count text-normal"></span>
              vuejs/vitepress
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div class="pt-2 pl-2">
        <details class="dropdown details-reset details-overlay d-inline-block">
          <summary class="btn-link link-gray" aria-haspopup="true">
            Manage notifications
            <div class="dropdown-caret"></div>
          </summary>

          <ul
            class="dropdown-menu dropdown-menu-ne ml-n2"
            style="width: 175px;"
          >
            <li>
              <a class="dropdown-item" href="/settings/notifications"
                >Notification settings</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="/watching">Watched repositories</a>
            </li>
            <li>
              <a class="dropdown-item" href="/notifications/subscriptions"
                >Subscriptions</a
              >
            </li>
          </ul>
        </details>
      </div>
    </nav>
  </div>
</template>
