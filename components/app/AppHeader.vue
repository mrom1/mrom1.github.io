<template>
  <v-app-bar app fixed eleviation="4" :clipped-left="true">
    <div class="headerGlobalContent w-full">
      <v-container fluid>
        <v-row
          justify="start"
          align="center"
          flex-column
          style="flex-wrap: nowrap"
        >
          <v-col xs="3" justify="start" align-self="center" class="flex-grow-0">
            <AppHeaderLogo />
          </v-col>
          <v-col xs="9" justify="start" align-self="center">
            <AppSearchbar />
          </v-col>
          <AppHeaderMenu />
        </v-row>
      </v-container>
    </div>
  </v-app-bar>
</template>
