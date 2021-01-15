<template>
  <nav v-if="pageCount > 0" class="paginate-container" aria-label="Pagination">
    <div class="pagination">
      <template
        v-for="pageNum in pageNums"
        :key="'num' + pageNum.type + pageNum.num"
      >
        <template v-if="pageNum.type === PaginationType.Prev">
          <template v-if="pageNum.disabled">
            <span
              class="previous_page"
              :aria-disabled="pageNum.disabled"
              aria-label="上一页"
            >
              上一页
            </span>
          </template>
          <template v-else>
            <a
              rel="prev"
              @click="onPageChange(pageNum.num)"
              aria-label="上一页"
              class="previous_page"
            >
              上一页
            </a>
          </template>
        </template>
        <template v-if="pageNum.type === PaginationType.Break">
          <span class="gap">…</span>
        </template>
        <template v-if="pageNum.type === PaginationType.Num">
          <template v-if="pageNum.selected">
            <em aria-current="page">
              {{ pageNum.num }}
            </em>
          </template>
          <template v-else>
            <a
              @click="onPageChange(pageNum.num)"
              :aria-label="'Page' + pageNum.num"
            >
              {{ pageNum.num }}
            </a>
          </template>
        </template>
        <template v-if="pageNum.type === PaginationType.Next">
          <template v-if="pageNum.disabled">
            <span
              class="next_page"
              :aria-disabled="pageNum.disabled"
              aria-label="下一页"
            >
              下一页
            </span>
          </template>
          <template v-else>
            <a
              rel="next"
              @click="onPageChange(pageNum.num)"
              aria-label="下一页"
              class="next_page"
            >
              下一页
            </a>
          </template>
        </template>
      </template>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { PaginationType, PaginstionModel } from '../../types/pagination';
export default defineComponent({
  name: 'PrPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number,
      default: 0
    },
    marginPageCount: {
      type: Number,
      default: 1
    },
    surroundingPageCount: {
      type: Number,
      default: 2
    },
    showPages: {
      type: Boolean,
      default: true
    }
  },
  emits: ['page-change'],
  setup(props, ctx) {
    const current = ref(props.currentPage);
    /**
     * 生成翻页组件数据，函数直接从@primer/component复制过来
     * https://github.com/primer/components/blob/master/src/Pagination/model.js
     *
     * @param pageCount 总页数
     * @param currentPage 当前页
     * @param showPages 是否显示数字页码
     * @param marginPageCount 两边留的页码数
     * @param surroundingPageCount 当前页两边留的页码数
     */
    const buildPaginationModel = (
      pageCount: number,
      currentPage: number,
      showPages: boolean,
      marginPageCount: number,
      surroundingPageCount: number
    ): PaginstionModel[] => {
      const pages: PaginstionModel[] = [];

      if (showPages) {
        const pageNums: number[] = [];
        const addPage = (n: number) => {
          if (n >= 1 && n <= pageCount) {
            pageNums.push(n);
          }
        };

        // Start by defining the window of pages to show around the current page.
        // If the window goes off either edge, shift it until it fits.
        let extentLeft = currentPage - surroundingPageCount;
        let extentRight = currentPage + surroundingPageCount;
        if (extentLeft < 1 && extentRight > pageCount) {
          // Our window is larger than the entire range,
          // so simply display every page.
          extentLeft = 1;
          extentRight = pageCount;
        } else if (extentLeft < 1) {
          while (extentLeft < 1) {
            extentLeft++;
            extentRight++;
          }
        } else if (extentRight > pageCount) {
          while (extentRight > pageCount) {
            extentLeft--;
            extentRight--;
          }
        }

        // Next, include the pages in the margins.
        // If a margin page is already covered in the window,
        // extend the window to the other direction.
        for (let i = 1; i <= marginPageCount; i++) {
          const leftPage = i;
          const rightPage = pageCount - (i - 1);
          if (leftPage >= extentLeft) {
            extentRight++;
          } else {
            addPage(leftPage);
          }
          if (rightPage <= extentRight) {
            extentLeft--;
          } else {
            addPage(rightPage);
          }
        }

        for (let i = extentLeft; i <= extentRight; i++) {
          addPage(i);
        }

        const sorted = pageNums
          .slice()
          .sort((a, b) => a - b)
          .filter((item, idx, ary) => !idx || item !== ary[idx - 1]);
        for (let idx = 0; idx < sorted.length; idx++) {
          const num = sorted[idx];
          const selected = num === currentPage;
          if (idx === 0) {
            if (num !== 1) {
              // If the first page isn't page one,
              // we need to add a break
              pages.push({
                type: PaginationType.Break,
                num: 1
              });
            }
            pages.push({
              type: PaginationType.Num,
              num,
              selected
            });
          } else {
            const last = sorted[idx - 1];
            const delta = num - last;
            if (delta === 1) {
              pages.push({
                type: PaginationType.Num,
                num,
                selected
              });
            } else {
              // We skipped some, so add a break
              pages.push({
                type: PaginationType.Break,
                num: num - 1
              });
              pages.push({
                type: PaginationType.Num,
                num,
                selected
              });
            }
          }
        }

        const lastPage = pages[pages.length - 1];
        if (
          lastPage.type === PaginationType.Num &&
          lastPage.num !== pageCount
        ) {
          // The last page we rendered wasn't the actual last page,
          // so we need an additional break
          pages.push({
            type: PaginationType.Break,
            num: pageCount
          });
        }
      }

      const prev: PaginstionModel = {
        type: PaginationType.Prev,
        num: currentPage - 1,
        disabled: currentPage === 1
      };
      const next: PaginstionModel = {
        type: PaginationType.Next,
        num: currentPage + 1,
        disabled: currentPage === pageCount
      };
      return [prev, ...pages, next];
    };

    const pageNums = computed(() => {
      return buildPaginationModel(
        props.pageCount,
        current.value,
        props.showPages,
        props.marginPageCount,
        props.surroundingPageCount
      );
    });

    const onPageChange = (val: number): void => {
      console.log('page change', val);

      current.value = val;
      ctx.emit('page-change', current.value);
    };

    return {
      pageNums,
      onPageChange,
      PaginationType
    };
  }
});
</script>
