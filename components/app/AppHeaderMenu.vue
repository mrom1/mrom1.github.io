<template>
  <div>
    <v-menu offset-y right>
      <template #activator="{ on, attrs }">
        <v-btn icon>
          <v-icon
            class="border-transparent hover:border-green-300 hover:text-green-500"
            v-bind="attrs"
            v-on="on"
            >mdi-menu
          </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-subheader class="uppercase tracking-wider font-bold text-base"
          >menu</v-subheader
        >
        <v-divider />
        <v-list-item-group class="list-item-group">
          <NuxtLink to="/">
            <v-list-item>
              <v-icon>mdi-file-document-multiple</v-icon>
              <v-list-item-title class="pl-2">Articles</v-list-item-title>
            </v-list-item>
          </NuxtLink>
          <v-divider />
          <NuxtLink to="/repositories">
            <v-list-item>
              <v-icon>mdi-source-repository-multiple</v-icon>
              <v-list-item-title class="pl-2">Projects</v-list-item-title>
            </v-list-item>
          </NuxtLink>
          <v-divider />
          <v-list-item href="https://github.com/mrom1" target="_blank">
            <v-icon>mdi-github</v-icon>
            <v-list-item-title class="pl-2">Github Profile</v-list-item-title>
          </v-list-item>
          <v-divider />
          <NuxtLink to="/about">
            <v-list-item>
              <v-icon>mdi-information</v-icon>
              <v-list-item-title class="pl-2">About</v-list-item-title>
            </v-list-item>
          </NuxtLink>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped>
.list-item-group .v-list-item:hover {
  background-color: #48bb78;
}
</style>
