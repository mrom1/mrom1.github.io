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
      <div class="sidebarContentContainer">
        <v-list-item>
          <v-list-item-content align="center">
            <v-list-item-title class="title">
              <v-img
                lazy-src="/images/profile/github_profile_picture_small.png"
                max-height="100%"
                max-width="100%"
                src="/images/profile/github_profile_picture_large.png"
              />
            </v-list-item-title>
            <v-list-item-subtitle>
              <br />
              <p>
                <em
                  >&bdquo;Cut until there is nothing left <br />
                  to cut and all there is left is<br />
                  principled and fundamental.&rdquo;</em
                ><br />
              </p>
              <p class="text-xs">― Bjarne Stroustrup</p>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <AppSidebarLinks />
      </div>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'AppSidebarHome'
}
</script>
