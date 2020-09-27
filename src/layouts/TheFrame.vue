<template>
  <div class="sidebar d-none d-lg-block">
    <div
      class="d-flex flex-items-center p-4"
      style="z-index: 3;"
      id="github-logo"
    >
      <a href="/cn" class="text-white" aria-hidden="true">
        <svg
          version="1.1"
          width="32"
          height="32"
          viewBox="0 0 16 16"
          class="octicon octicon-mark-github"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </a>
      <a
        href="/cn"
        class="h4-mktg text-white no-underline no-wrap pl-2 flex-auto"
        >GitHub Docs</a
      >
    </div>

    <ul class="sidebar-products">
      <!--
  Styling note:

  Categories, Maptopics, and Articles list items get a class of `active` when they correspond to content
  hierarchy of the current page. If an item's URL is also the same as the current URL, the item
  also gets an `is-current-page` class.
 -->

      <li title="Home">
        <a href="/cn" class="f6 pl-4 pr-5 ml-n1 pb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="octicon"
            viewBox="0 0 16 16"
            width="16"
            height="16"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.78033 12.5303C7.48744 12.8232 7.01256 12.8232 6.71967 12.5303L2.46967 8.28033C2.17678 7.98744 2.17678 7.51256 2.46967 7.21967L6.71967 2.96967C7.01256 2.67678 7.48744 2.67678 7.78033 2.96967C8.07322 3.26256 8.07322 3.73744 7.78033 4.03033L4.81066 7L12.25 7C12.6642 7 13 7.33579 13 7.75C13 8.16421 12.6642 8.5 12.25 8.5L4.81066 8.5L7.78033 11.4697C8.07322 11.7626 8.07322 12.2374 7.78033 12.5303Z"
            ></path>
          </svg>
          All products
        </a>
      </li>

      <li title="REST API" class="sidebar-product mb-2">
        <a href="/cn/free-pro-team@latest/rest" class="pl-4 pr-5 pb-1 f4"
          >REST API</a
        >
      </li>
      <ul class="sidebar-categories list-style-none">
        <li class="sidebar-category py-1">
          <details class="dropdown-withArrow details details-reset" open="">
            <summary>
              <div class="d-flex flex-justify-between">
                <a
                  href="/cn/free-pro-team@latest/rest/overview"
                  class="pl-4 pr-2 py-2 f6 text-uppercase d-block flex-auto mr-3"
                  >概览</a
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="octicon flex-shrink-0 arrow mr-3"
                  style="margin-top: 7px;"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                  ></path>
                </svg>
              </div>
            </summary>

            <!-- some categories have maptopics with child articles -->

            <ul class="sidebar-articles list-style-none">
              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/overview/resources-in-the-rest-api"
                  class="pl-4 pr-5 py-1"
                  >REST API 中的资源</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/overview/media-types"
                  class="pl-4 pr-5 py-1"
                  >媒体类型</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/overview/other-authentication-methods"
                  class="pl-4 pr-5 py-1"
                  >其他身份验证方法</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/overview/troubleshooting"
                  class="pl-4 pr-5 py-1"
                  >疑难解答</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/overview/api-previews"
                  class="pl-4 pr-5 py-1"
                  >API 预览</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/overview/libraries"
                  class="pl-4 pr-5 py-1"
                  >库</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/overview/endpoints-available-for-github-apps"
                  class="pl-4 pr-5 py-1 pb-2"
                  >可用于 GitHub 应用程序的端点</a
                >
              </li>
            </ul>
          </details>
        </li>

        <li class="sidebar-category py-1">
          <details class="dropdown-withArrow details details-reset" open="">
            <summary>
              <div class="d-flex flex-justify-between">
                <a
                  href="/cn/free-pro-team@latest/rest/reference"
                  class="pl-4 pr-2 py-2 f6 text-uppercase d-block flex-auto mr-3"
                  >参考</a
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="octicon flex-shrink-0 arrow mr-3"
                  style="margin-top: 7px;"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                  ></path>
                </svg>
              </div>
            </summary>

            <!-- some categories have maptopics with child articles -->

            <ul class="sidebar-articles list-style-none">
              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/actions"
                  class="pl-4 pr-5 py-1"
                  >操作</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/activity"
                  class="pl-4 pr-5 py-1"
                  >活动</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/apps"
                  class="pl-4 pr-5 py-1"
                  >应用</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/billing"
                  class="pl-4 pr-5 py-1"
                  >计费</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/checks"
                  class="pl-4 pr-5 py-1"
                  >检查</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/code-scanning"
                  class="pl-4 pr-5 py-1"
                  >Code scanning</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/codes-of-conduct"
                  class="pl-4 pr-5 py-1"
                  >行为准则</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/emojis"
                  class="pl-4 pr-5 py-1"
                  >表情符号</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/enterprise-admin"
                  class="pl-4 pr-5 py-1"
                  >GitHub Enterprise 管理</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/gists"
                  class="pl-4 pr-5 py-1"
                  >Gist</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/git"
                  class="pl-4 pr-5 py-1"
                  >Git 数据库</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/gitignore"
                  class="pl-4 pr-5 py-1"
                  >Gitignore</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/interactions"
                  class="pl-4 pr-5 py-1"
                  >互动</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/issues"
                  class="pl-4 pr-5 py-1"
                  >议题</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/licenses"
                  class="pl-4 pr-5 py-1"
                  >许可</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/markdown"
                  class="pl-4 pr-5 py-1"
                  >Markdown</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/meta"
                  class="pl-4 pr-5 py-1"
                  >元数据</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/migrations"
                  class="pl-4 pr-5 py-1"
                  >迁移</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/oauth-authorizations"
                  class="pl-4 pr-5 py-1"
                  >OAuth 授权</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/orgs"
                  class="pl-4 pr-5 py-1"
                  >组织</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/projects"
                  class="pl-4 pr-5 py-1"
                  >项目</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/pulls"
                  class="pl-4 pr-5 py-1"
                  >拉取</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/rate-limit"
                  class="pl-4 pr-5 py-1"
                  >速率限制</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/reactions"
                  class="pl-4 pr-5 py-1"
                  >反应</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/repos"
                  class="pl-4 pr-5 py-1"
                  >仓库</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/scim"
                  class="pl-4 pr-5 py-1"
                  >SCIM</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/search"
                  class="pl-4 pr-5 py-1"
                  >搜索</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/teams"
                  class="pl-4 pr-5 py-1"
                  >团队</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/users"
                  class="pl-4 pr-5 py-1"
                  >用户</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/reference/permissions-required-for-github-apps"
                  class="pl-4 pr-5 py-1 pb-2"
                  >GitHub 应用程序所需的权限</a
                >
              </li>
            </ul>
          </details>
        </li>

        <li class="sidebar-category py-1">
          <details class="dropdown-withArrow details details-reset" open="">
            <summary>
              <div class="d-flex flex-justify-between">
                <a
                  href="/cn/free-pro-team@latest/rest/guides"
                  class="pl-4 pr-2 py-2 f6 text-uppercase d-block flex-auto mr-3"
                  >指南</a
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="octicon flex-shrink-0 arrow mr-3"
                  style="margin-top: 7px;"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                  ></path>
                </svg>
              </div>
            </summary>

            <!-- some categories have maptopics with child articles -->

            <ul class="sidebar-articles list-style-none">
              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/guides/getting-started-with-the-rest-api"
                  class="pl-4 pr-5 py-1"
                  >REST API 入门指南</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/guides/basics-of-authentication"
                  class="pl-4 pr-5 py-1"
                  >身份验证基础知识</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/guides/discovering-resources-for-a-user"
                  class="pl-4 pr-5 py-1"
                  >为用户发现资源</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/guides/delivering-deployments"
                  class="pl-4 pr-5 py-1"
                  >交付部署</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/guides/rendering-data-as-graphs"
                  class="pl-4 pr-5 py-1"
                  >将数据渲染为图形</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/guides/working-with-comments"
                  class="pl-4 pr-5 py-1"
                  >处理注释</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/guides/traversing-with-pagination"
                  class="pl-4 pr-5 py-1"
                  >使用分页遍历</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/guides/building-a-ci-server"
                  class="pl-4 pr-5 py-1"
                  >构建 CI 服务器</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/guides/best-practices-for-integrators"
                  class="pl-4 pr-5 py-1"
                  >集成者最佳实践</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/guides/getting-started-with-the-git-database-api"
                  class="pl-4 pr-5 py-1"
                  >Git 数据库 API 入门指南</a
                >
              </li>

              <li class="sidebar-article">
                <a
                  href="/cn/free-pro-team@latest/rest/guides/getting-started-with-the-checks-api"
                  class="pl-4 pr-5 py-1 pb-2"
                  >检查 API 入门指南</a
                >
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </ul>
  </div>
  <main class="width-full">main</main>
</template>
