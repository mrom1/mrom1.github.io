<template>
  <div class="searchbarContainer flex w-full pt-3 pl-4">
    <v-form ref="searchbarForm">
      <v-combobox
        v-model="select"
        :items="items"
        :loading="loading"
        :search-input.sync="search"
        dense
        auto-select-first
        hide-selected
        item-text="title"
        item-value="slug"
        label="Search Articles"
        prepend-inner-icon="mdi-database-search"
        return-object
        single-line
      >
        <template #no-data>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                No results matching "<strong>{{ search }}</strong
                >".
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-combobox>
      <v-expand-transition>
        <div v-if="select">{{ gotoArticle(select) }}</div>
      </v-expand-transition>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  async mounted() {
    this.items = await this.$content('articles')
      .limit(6)
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()
  },
  methods: {
    gotoArticle(article) {
      if (this.items.some((i) => i.slug === article.slug)) {
        this.$router.push({
          name: 'articles-slug',
          params: { slug: article.slug }
        })
        this.$refs.searchbarForm.reset()
      }
    },

    async querySelections(searchQuery) {
      this.loading = true
      const articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .only(['title', 'slug'])
        .fetch()

      this.loading = false
      this.items = articles
    }
  }
}
</script>

<style scoped>
.searchbarContainer .v-text-field {
  max-width: 400px;
}
</style>
