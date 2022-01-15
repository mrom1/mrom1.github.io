<template>
  <div>
    <!-- Welcome Logo -->
    <WelcomeText />
    <br />
    <br />
    <v-divider />
    <!-- List of recent articles -->
    <div class="listOfArticlesContent">
      <AppArticleEntry
        v-for="article in articles"
        :key="article.slug"
        :title="article.title"
        :date="convertDateToLocalTime(article.createdAt)"
        :reading-time="article.readingtime"
        :tags="article.tags"
        :slug="article.slug"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'createdAt', 'slug', 'tags', 'readingtime'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles
    }
  },

  head() {
    return {
      title: 'Articles'
    }
  }
}
</script>
