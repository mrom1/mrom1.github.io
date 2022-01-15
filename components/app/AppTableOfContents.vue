<template>
  <div
    v-if="articleDescription.toc.length"
    class="w-full lg:w-1/4 block relative"
  >
    <div
      class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)"
    >
      <nav class="py-4 lg:py-8" :class="'lg:pr-2'">
        <p
          class="mb-2 ml-6 text-gray-500 uppercase tracking-wider font-bold text-base"
        >
          {{ articleDescription.title }}
        </p>
        <scrollactive
          class="nav"
          active-class="-active"
          highlight-first-item
          :offset="0"
          tag="ul"
        >
          <li
            v-for="link of articleDescription.toc"
            :key="link.id"
            class="text-gray-700 dark:text-gray-300"
            :class="{
              'border-t border-dashed dark:border-gray-800 first:border-t-0':
                link.depth === 2
            }"
          >
            <a
              :href="`#${link.id}`"
              class="block text-sm scrollactive-item transition-padding ease-in-out duration-300 hover:pl-1 px-2 rounded font-medium py-1 mr-4 hover:text-green-500 flex items-center justify-between bg-primary-100 hover:text-green-500 dark:bg-primary-900 nuxt-link-active"
              :class="{
                'py-2': link.depth === 2,
                'ml-2 pb-2': link.depth === 3,
                'ml-3 pb-2': link.depth === 4,
                'ml-4 pb-2': link.depth === 5,
                'ml-5 pb-2': link.depth === 6
              }"
              >{{ link.text }}</a
            >
          </li>
        </scrollactive>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    articleDescription() {
      return this.$store.state.articleDescription
    }
  }
}
</script>

<style scoped>
a {
  color: #a0aec0 !important;
}

a.-active {
  color: #00cd81 !important;
  background-color: rgba(0, 62, 39, 0.5);
  border-radius: 10px 10px 10px 10px;
}
</style>
