<template>
  <v-app-bar app fixed eleviation="4" :clipped-left="true">
    <v-row justify="start" align="center" flex-column style="flex-wrap: nowrap">
      <v-col xs="3" justify="start" align-self="center" class="flex-grow-0">
        <AppHeaderLogo />
      </v-col>
      <div v-show="$vuetify.breakpoint.mdAndUp" class="pl-8">
        <v-btn text color="#48bb78" to="/">ARTICLES</v-btn>
        <v-btn text color="#48bb78" to="/repositories">PROJECTS</v-btn>
      </div>
      <v-col xs="9" justify="start" align-self="center">
        <AppSearchbar />
      </v-col>
      <AppHeaderMenu />
    </v-row>
  </v-app-bar>
</template>
