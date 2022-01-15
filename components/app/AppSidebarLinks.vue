<template>
  <div class="sidebarContentLinksContainer">
    <v-divider />
    <br />
    <div class="sidebarContentLinksContentContainer">
      <v-spacer />
      <NuxtLink to="/">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon
              class="border-transparent hover:border-green-300 hover:text-green-500"
              v-bind="attrs"
              v-on="on"
              >mdi-file-document-multiple</v-icon
            >
          </template>
          <span>Articles</span>
        </v-tooltip>
      </NuxtLink>

      <v-spacer />

      <NuxtLink to="repositories">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon
              class="border-transparent hover:border-green-300 hover:text-green-500"
              v-bind="attrs"
              v-on="on"
              >mdi-source-repository-multiple</v-icon
            >
          </template>
          <span>Projects</span>
        </v-tooltip>
      </NuxtLink>

      <v-spacer />

      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon href="https://github.com/mrom1" target="_blank">
            <v-icon
              class="pb-3 border-transparent hover:border-green-300 hover:text-green-500"
              v-bind="attrs"
              v-on="on"
              >mdi-github</v-icon
            >
          </v-btn>
        </template>
        <span>Github profile</span>
      </v-tooltip>

      <v-spacer />

      <NuxtLink to="about">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon
              class="border-transparent hover:border-green-300 hover:text-green-500"
              v-bind="attrs"
              v-on="on"
              >mdi-information</v-icon
            >
          </template>
          <span>About me</span>
        </v-tooltip>
      </NuxtLink>
      <v-spacer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSidebarLinks'
}
</script>

<style>
.sidebarContentLinksContainer {
  align-self: flex-end;
  justify-content: flex-end;
}
.sidebarContentLinksContentContainer {
  display: flex;
  justify-content: center;
  align-self: flex-end;
}
</style>
