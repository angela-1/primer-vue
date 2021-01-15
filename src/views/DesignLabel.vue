<template>
  <the-component>
    <template #title> label </template>
    <template #content>
      <h2>Labels</h2>
      <pr-label>design</pr-label>

      <h2>Label contrast</h2>
      <pr-label classes="Label">Default</pr-label>
      <pr-label classes="Label Label--gray  ml-1">Gray</pr-label>
      <pr-label classes="Label Label--gray-darker ml-1">Dark gray</pr-label>

      <h2>Colored labels</h2>

      <pr-label classes="Label mr-1 Label--yellow">Pending</pr-label>
      <pr-label classes="Label mr-1 Label--orange">Warning</pr-label>
      <pr-label classes="Label mr-1 Label--red">Error</pr-label>
      <pr-label classes="Label mr-1 Label--green">Success</pr-label>
      <pr-label classes="Label mr-1 Label--blue">Info</pr-label>
      <pr-label classes="Label mr-1 Label--purple">PRO</pr-label>
      <pr-label classes="Label mr-1 Label--pink">Sponsor</pr-label>

      <h2>Label sizes</h2>
      <pr-label classes="Label Label--gray-darker mr-1">Default</pr-label>
      <pr-label classes="Label Label--large Label--gray-darker mr-1">
        Large
      </pr-label>

      <h2>Inline label</h2>
      <p class="col-4">
        Lorem Ipsum is simply
        <pr-label classes="Label Label--inline">dummy text</pr-label> of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text.
      </p>

      <h2>Issue labels</h2>
      <pr-label classes="IssueLabel bg-blue text-white mr-1">Primer</pr-label>
      <pr-label classes="IssueLabel bg-red text-white mr-1">bug 🐛</pr-label>
      <pr-label classes="IssueLabel bg-pink text-white mr-1"
        >help wanted</pr-label
      >
      <pr-label classes="IssueLabel bg-yellow text-gray-dark mr-1"
        >🚂 deploy: train</pr-label
      >

      <pr-label classes="IssueLabel IssueLabel--big bg-blue text-white mr-1"
        >Primer</pr-label
      >
      <pr-label classes="IssueLabel IssueLabel--big bg-red text-white mr-1"
        >bug 🐛</pr-label
      >
      <pr-label classes="IssueLabel IssueLabel--big bg-pink text-white mr-1"
        >help wanted</pr-label
      >
      <pr-label
        classes="IssueLabel IssueLabel--big bg-yellow text-gray-dark mr-1"
        >🚂 deploy: train</pr-label
      >

      <h2>State</h2>
      <pr-label classes="State">State</pr-label>
      <span class="State">Default</span>

      <h2>Small state</h2>

      <pr-label classes="State State--small mr-2">Default</pr-label>
      <pr-label classes="State State--small State--green mr-2">
        <!-- <%= octicon "issue-opened" %> -->
        <svg
          class="octicon octicon-issue-opened"
          viewBox="0 0 14 16"
          version="1.1"
          width="14"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
          ></path>
        </svg>
        Open
      </pr-label>
      <pr-label classes="State State--small State--red mr-2">
        <!-- <%= octicon "issue-closed" %> -->
        <svg
          class="octicon octicon-issue-closed"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"
          ></path>
        </svg>
        Closed
      </pr-label>

      <h2>Counter</h2>

      <pr-label classes="Counter mr-1">1</pr-label>
      <pr-label classes="Counter mr-1 Counter--gray-light">23</pr-label>
      <pr-label classes="Counter mr-1 Counter--gray">456</pr-label>

      <h2>diffstate</h2>

      <pr-label
        classes="diffstat tooltipped tooltipped-e"
        aria-label="6 changes: 3 additions &amp; 3 deletions"
      >
        6
        <pr-label classes="diffstat-block-added"></pr-label
        ><pr-label classes="diffstat-block-added"></pr-label
        ><pr-label classes="diffstat-block-deleted"></pr-label
        ><pr-label classes="diffstat-block-deleted"></pr-label
        ><pr-label classes="diffstat-block-neutral"></pr-label>
      </pr-label>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import TheComponent from '../layouts/TheComponent.vue';

export default defineComponent({
  name: 'DesignLabel',
  components: {
    TheComponent
  },
  setup() {
    return {};
  }
});
</script>
