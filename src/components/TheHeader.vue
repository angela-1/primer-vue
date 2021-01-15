<template>
  <header
    class="Header py-lg-0 js-details-container Details flex-lg-nowrap px-3 border-bottom"
    role="banner"
  >
    <div class="Header-itemd-lg-flex">
      <a
        href="/"
        class="Header-link d-inline-flex flex-items-center"
        aria-label="Homepage "
      >
        <img src="../assets/logo.png" alt="logo" height="32" />
        <span class="f4 ml-2">Primer Vue</span>
      </a>
    </div>
    <div
      class="Header-item Header-item--full flex-lg-row width-full mt-lg-0 Details-content--hidden"
    >
      <div class="flex-1"></div>
      <nav
        class="d-flex flex-lg-row flex-self-stretch flex-lg-self-auto"
        aria-label="Global"
      >
        <router-link
          class="Header-link py-3 mr-5"
          to="/"
          active-class="selected"
          >设计组件</router-link
        >
        <a href="" class="Header-link py-3 mr-5"> 指南 </a>
      </nav>
      <div class="flex-1"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.Header {
  background-color: white;
  .Header-link {
    color: #586069;
  }
}
</style>
