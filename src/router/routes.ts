import { RouteRecordRaw } from 'vue-router'

import Design from '../views/Design.vue'
import DesignIcon from '../views/DesignIcon.vue'
import DesignTabNav from '../views/DesignTabNav.vue'
import DesignSideNav from '../views/DesignSideNav.vue'
import GettingStarted from '../views/GettingStarted.vue'
import UpdateLog from '../views/UpdateLog.vue'
import TheNested from '../layouts/TheNested.vue'
import DesignDateRange from '../views/DesignDateRange.vue'
import DesignPagination from '../views/DesignPagination.vue'

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
        path: 'tab-nav',
        name: 'tab-nav',
        meta: {
          title: '标签导航 TabNav'
        },
        component: DesignTabNav
      },
      {
        path: 'side-nav',
        name: 'side-nav',
        meta: {
          title: '侧边导航 SideNav'
        },
        component: DesignSideNav
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
      }
    ]
  }
]
