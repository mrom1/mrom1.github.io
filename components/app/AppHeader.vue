<template>
  <v-app-bar app fixed elevation="4" :clipped-left="true">
    <v-row justify="start" align="center" class="header-container">
      <!-- Logo Column (256px wide) -->
      <v-col class="logo-column" cols="auto">
        <AppHeaderLogo />
      </v-col>

      <!-- Search Bar Column (takes the remaining space) -->
      <v-col class="searchbar-column" cols="auto">
        <AppSearchbar />
      </v-col>

      <!-- Header Menu -->
      <AppHeaderMenu />
    </v-row>
  </v-app-bar>
</template>

<style scoped>
  /* Flex container for the header */
  .header-container {
    display: flex;
    align-items: center;
    width: 100%;
  }

  /* Logo column should take up 256px */
  .logo-column {
    width: 256px;
  }

  /* Search bar should fill the remaining space */
  .searchbar-column {
    flex-grow: 1;  /* Let search bar take the remaining space */
  }

  /* Make sure the search bar is full width */
  .searchbarContainer .v-text-field {
    width: 100%;
  }
</style>
