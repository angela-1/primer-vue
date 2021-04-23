---
title: '翻页 Pagination'
desc: '翻页组件的使用'
---

# 翻页 Pagination 

将按钮样式应用到一系列相关边的链接上，如上一页，下一页，页码。

## 上一页/下一页翻页

您可以添加一个仅包含上一页和下一页的简单翻页组件。

```vue demo
<template>
  <pr-pagination :page-count="9" :show-pages="false">
  </pr-pagination>
</template>
```

## 带页码的翻页

对应多个页码，确保用户清楚当前在全部页的哪一页。

在翻页组件添加页码锚点。

```vue demo
<template>
  <pr-pagination :page-count="9"></pr-pagination>
</template>
```

## 属性

| 参数               | 说明               | 类型  | 是否必须 | 可选值  | 默认值 |
| -------------------- | -------------------- | ------- | -------- | ---------- | ------ |
| pageCount            | 总页数            | number  | 是      | -          | -      |
| currentPage          | 当前页            | number  | 否      | -          | 1      |
| marginPageCount      | 两侧保留的页数 | number  | 否      | -          | 1      |
| surroundingPageCount | 当前页两边保留的页数 | number  | 否      | -          | 2      |
| showPages            | 是否显示数字页码 | boolean | 否      | true,false | false  |


## 事件

| 名称         | 说明         | 回调参数 |
| -------------- | -------------- | -------- |
| current-change | 页码改变时触发 | 当前页 |
