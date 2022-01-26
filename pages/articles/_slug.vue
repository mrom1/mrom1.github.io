<template>
  <article>
    <div class="markdown-body">
      <h1 class="font-bold text-4xl">{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <p class="pb-4">
        Post created at: {{ convertDateToLocalTime(article.createdAt) }}
      </p>
      <!-- content from markdown -->
      <nuxt-content :document="article" />
      <br />
      <v-divider />
      <p class="pt-4 text-sm">
        Post last updated: {{ convertDateToLocalTime(article.updatedAt) }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  toc: [],
  title: '',

  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return {
      article,
      title: article.title,
      toc: article.toc
    }
  },

  head() {
    return {
      title: this.title
    }
  },

  mounted() {
    const desc = {
      title: this.title,
      toc: this.toc
    }

    this.$store.commit('CHANGE_NAV_ARTICLE_DESCRIPTION', desc)
  }
}
</script>
