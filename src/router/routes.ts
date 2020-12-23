import { RouteRecordRaw } from 'vue-router'

import Design from '../views/Design.vue'
import DesignIcon from '../views/DesignIcon.vue'
import DesignTabnav from '../views/DesignTabnav.vue'
import DesignSidenav from '../views/DesignSidenav.vue'
import GettingStarted from '../views/GettingStarted.vue'
import UpdateLog from '../views/UpdateLog.vue'
import TheNested from '../layouts/TheNested.vue'
import DesignDateRange from '../views/DesignDateRange.vue'
import DesignPagination from '../views/DesignPagination.vue'
import DesignButton from '../views/DesignButton.vue'
import DesignProgress from '../views/DesignProgress.vue'
import DesignBreadcrumb from '../views/DesignBreadcrumb.vue'
import DesignSubnav from '../views/DesignSubnav.vue'

export const routes: RouteRecordRaw[] = [
  // 重定向的路由不能有name，会造成无限调用
  {
    path: '/',
    redirect: '/design'
  },
  {
    path: '/design',
    name: 'design',
    meta: {
      title: '设计'
    },
    component: Design
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    meta: {
      title: '开始使用'
    },
    component: GettingStarted
  },
  {
    path: '/update-log',
    name: 'update-log',
    meta: {
      title: '更新日志'
    },
    component: UpdateLog
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      title: '组件'
    },
    component: TheNested,
    redirect: 'icon',
    children: [
      {
        path: 'icon',
        name: 'icon',
        meta: {
          title: '图标 Icon'
        },
        component: DesignIcon
      },
      {
        path: 'tabnav',
        name: 'tabnav',
        meta: {
          title: '标签导航 Tabnav'
        },
        component: DesignTabnav
      },
      {
        path: 'sidenav',
        name: 'sidenav',
        meta: {
          title: '侧边导航 Sidenav'
        },
        component: DesignSidenav
      },
      {
        path: 'date-range',
        name: 'date-range',
        meta: {
          title: '日期范围 DateRange'
        },
        component: DesignDateRange
      },
      {
        path: 'pagination',
        name: 'pagination',
        meta: {
          title: '翻页 Pagination'
        },
        component: DesignPagination
      },
      {
        path: 'button',
        name: 'button',
        meta: {
          title: '按钮 Button'
        },
        component: DesignButton
      },
      {
        path: 'progress',
        name: 'progress',
        meta: {
          title: '进度条 Progress'
        },
        component: DesignProgress
      },
      {
        path: 'breadcrumb',
        name: 'breadcrumb',
        meta: {
          title: '面包屑 Breadcrumb'
        },
        component: DesignBreadcrumb
      },
      {
        path: 'subnav',
        name: 'subnav',
        meta: {
          title: '子导航 Subnav'
        },
        component: DesignSubnav
      }
    ]
  }
]
