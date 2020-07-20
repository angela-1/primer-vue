<template>
  <header
    class="Header py-lg-0 js-details-container Details flex-lg-nowrap px-3 border-bottom"
    role="banner"
  >
    <div class="Header-itemd-lg-flex">
      <a href="/" class="Header-link" aria-label="Homepage ">
        <img src="../assets/logo.png" alt="logo" height="32" />
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
        <a
          class="js-selected-navigation-item Header-link py-lg-3 mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15"
          data-hotkey="g p"
          data-ga-click="Header, click, Nav menu - item:pulls context:user"
          aria-label="Pull requests you created"
          data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls"
          href="/pulls"
          >日常管理</a
        >
        <a
          class="js-selected-navigation-item Header-link py-lg-3 mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15"
          data-hotkey="g p"
          data-ga-click="Header, click, Nav menu - item:pulls context:user"
          aria-label="Pull requests you created"
          data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls"
          href="/pulls"
          >班级管理</a
        >
        <a
          class="js-selected-navigation-item Header-link py-lg-3 mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15"
          data-hotkey="g i"
          data-ga-click="Header, click, Nav menu - item:issues context:user"
          aria-label="Issues you created"
          data-selected-links="/issues /issues/assigned /issues/mentioned /issues"
          href="/issues"
          >设置</a
        >
      </nav>
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
