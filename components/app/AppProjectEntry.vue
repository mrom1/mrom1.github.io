<template>
  <div class="projectEntryContainer">
    <div
      class="max-w-md mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl"
    >
      <div class="md:flex lg:flex xl:flex 2xl:flex">
        <div class="flex-shrink-0">
          <a :href="repositoryurl" target="_blank">
            <img
              class="h-48 object-cover w-full md:h-full md:w-48"
              :src="img"
            />
          </a>
        </div>
        <div class="p-4">
          <div
            class="uppercase tracking-wide text-lg text-green-500 font-semibold"
          >
            <!--
            {{ repositoryname }}
            -->
            <a :href="repositoryurl" target="_blank">{{ repositoryname }}</a>
          </div>
          <p
            class="block mt-1 text-base leading-tight font-medium text-gray-100"
          >
            {{ title }}
          </p>
          <p class="mt-2 text-gray-500">
            {{ description }}
          </p>
          <NuxtLink :to="{ name: 'projects-slug', params: { slug: slug } }">
            <v-btn text color="#48bb78" class="px-0">See Documentation</v-btn>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    img: {
      type: String,
      required: true
    },

    repositoryname: {
      type: String,
      required: true
    },

    repositoryurl: {
      type: String,
      required: true
    },

    slug: {
      type: String,
      required: true
    }
  }
}
</script>
