<template>
  <div>
    <NuxtLink to="/">
      <div class="headerLogoContainer">
        <img
          :src="
            require('~/static/images/profile/github_profile_picture_small.png')
          "
        />
        <p v-if="$vuetify.theme.dark" class="pt-3">
          <span class="text-base xs:text-sm font-bold text-gray-200"
            >mrom1/</span
          ><span class="text-base xs:text-sm font-bold text-green-500"
            >blog</span
          >
        </p>
        <p v-if="!$vuetify.theme.dark" class="pt-3">
          <span class="text-base xs:text-sm font-bold text-black">mrom1/</span
          ><span class="text-base xs:text-sm font-bold text-green-500"
            >blog</span
          >
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.headerLogoContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 256px;
}

.headerLogoContainer img {
  height: 48px;
  width: 48px;
}

.headerLogoContainer p {
  padding-left: 10px;
  align-items: center;
}
</style>
