<template>
  <v-card height="100%" class="mx-auto overflow-hidden">
    <v-navigation-drawer
      width="256px"
      color="rgb(50, 50, 80, 0.5)"
      :clipped="true"
      :permanent="$vuetify.breakpoint.mdAndUp"
      app
      fixed
    >
      <div class="sidebarTableOfContentsContainer">
        <v-list-item>
          <v-list-item-content>
            <AppTableOfContents />
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'AppSidebarArticle',

  computed: {
    articleTableOfContent() {
      return this.$store.state.articleTableOfContents
    }
  }
}
</script>
