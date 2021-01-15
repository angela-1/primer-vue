import { RouteRecordRaw } from 'vue-router';

import Design from '../views/Design.vue';
import TheNested from '../layouts/TheNested.vue';
import DesignIcon from '../views/DesignIcon.vue';
import DesignButton from '../views/DesignButton.vue';
import DesignDateRange from '../views/DesignDateRange.vue';
import DesignPagination from '../views/DesignPagination.vue';
import DesignLabel from '../views/DesignLabel.vue';

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
        component: DesignIcon
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
        path: 'label',
        name: 'label',
        meta: {
          title: '标签 Label'
        },
        component: DesignLabel
      },
    ]
  }
];
