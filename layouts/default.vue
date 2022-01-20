<template>
  <v-app id="app" dark>
    <div class="mainLayoutContainer">
      <!-- Sidebar -->
      <div class="sidebarLayoutContainer">
        <AppSidebarArticle v-show="isArticle" />
        <AppSidebarHome v-show="!isArticle" />
      </div>

      <!-- Header Component including Searchbar -->
      <AppHeader />

      <!-- Article content will be displayed here -->
      <div class="articleLayoutContentContainer">
        <v-main>
          <Nuxt />
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({ isMobile: false }),

  computed: {
    isArticle() {
      /** Used to switch the Sidebar in Desktop mode
       *  if the route is inside 'articles' or 'projects'
       *  e.g. ../articles/my-article or ../projects/my-project
       *  the Sidebar will contain a Table of Contents.
       */
      if (this.$route.name) {
        return !!(
          (this.$route.name.match('articles-*') &&
            this.$route.name.includes('-')) ||
          (this.$route.name.match('projects-*') &&
            this.$route.name.includes('-'))
        )
      } else {
        return false
      }
    }
  },

  beforeDestroy() {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize() {
      if (window.innerWidth < 600) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
      /*
      console.log(
        '(' +
          this.$vuetify.breakpoint.name +
          ') ' +
          'isMobile: ' +
          this.isMobile +
          '|' +
          this.$vuetify.breakpoint.mobile +
          ' (' +
          window.innerWidth +
          ')'
      )
      */
    }
  }
}
</script>

<style>
.mainLayoutContainer {
  background-color: rgb(50, 50, 80);
  width: 100%;
  height: 100%;
  z-index: 2;
}

.sidebarLayoutContainer {
  height: 100%;
  position: fixed;
  display: flex;
  overflow: hidden;
  padding-top: 60px;
  z-index: 1;
}

.sidebarContentContainer {
  position: relative;
  padding: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.articleLayoutContentContainer {
  padding: 24px;
  position: relative;
  background-color: rgba(50, 50, 80, 0.7);
}
</style>
