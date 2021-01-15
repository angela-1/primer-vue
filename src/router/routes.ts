import { RouteRecordRaw } from 'vue-router';

import Design from '../views/Design.vue';
import TheNested from '../layouts/TheNested.vue';
import DocIcon from '../docs/icon.md'
import DocButton from '../docs/button.md'
import DocDateRange from '../docs/date-range.md'
import DocPagination from '../docs/pagination.md'
import DocLabel from '../docs/label.md'
import DocSidenav from '../docs/sidenav.md'

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
        component: DocIcon
      },
      {
        path: 'button',
        name: 'button',
        meta: {
          title: '按钮 Button'
        },
        component: DocButton
      },
      {
        path: 'date-range',
        name: 'date-range',
        meta: {
          title: '日期范围 DateRange'
        },
        component: DocDateRange
      },
      {
        path: 'pagination',
        name: 'pagination',
        meta: {
          title: '翻页 Pagination'
        },
        component: DocPagination
      },
      {
        path: 'label',
        name: 'label',
        meta: {
          title: '标签 Label'
        },
        component: DocLabel
      },
      {
        path: 'sidenav',
        name: 'sidenav',
        meta: {
          title: '标签 Sidenav'
        },
        component: DocSidenav
      },
    ]
  }
];
