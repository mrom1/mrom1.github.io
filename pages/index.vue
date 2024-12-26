<template>
  <div>
    <!-- Welcome Logo -->
    <WelcomeText />
    <br />
    <br />
    <v-divider />

    <!-- Topics Section -->
    <br />
    <div class="topics">
      <span>Topics:</span>
      <button
        v-for="tag in allTags"
        :key="tag"
        :class="['topic-tag', { active: selectedTags.includes(tag) }]"
        @click="toggleTag(tag)"
      >
        {{ tag }}
      </button>
    </div>
    <br />
    <v-divider />

    <!-- List of filtered articles -->
    <div class="listOfArticlesContent">
      <AppArticleEntry
        v-for="article in filteredArticles"
        :key="article.slug"
        :title="article.title"
        :date="convertDateToLocalTime(article.createdAt)"
        :reading-time="article.readingtime"
        :tags="article.tags"
        :slug="article.slug"
        @tagClicked="handleTagClick"
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

      // Extract all unique tags from articles
      const allTags = Array.from(
        new Set(articles.flatMap((article) => article.tags))
      )

      return {
        articles,
        allTags
      }
    },

    data() {
      return {
        selectedTags: []
      }
    },

    head() {
      return {
        title: 'Articles'
      }
    },

    computed: {
      filteredArticles() {
        // Filter articles based on selected tags
        if (this.selectedTags.length === 0) {
          return this.articles
        }
        return this.articles.filter((article) =>
          this.selectedTags.every((tag) => article.tags.includes(tag))
        )
      }
    },

    methods: {
      toggleTag(tag) {
        // Add or remove the tag from selectedTags
        const index = this.selectedTags.indexOf(tag)
        if (index === -1) {
          this.selectedTags.push(tag)
        } else {
          this.selectedTags.splice(index, 1)
        }
      },
      handleTagClick(tag) {
        // Same behavior as toggleTag, but triggered from child components
        this.toggleTag(tag)
      }
    }
  }
</script>

<style scoped>
  /* Topics Section */
.topics {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.topics span {
  font-weight: bold;
  margin-right: 8px;
}

.topic-tag {
  color: #3e6d8e;
  background-color: #e0eaf1;
  border: 1px solid #3e6d8e;
  border-radius: 4px;
  padding: 5px 8px;
  cursor: pointer;
  font-size: 90%;
  line-height: 1.5;
  white-space: nowrap;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
}

.topic-tag:hover {
  background-color: #d2e0ec;
  border-color: #d2e0ec;
  color: #007bff;
}

.topic-tag.active {
  background-color: #48bb78;
  color: white;
  border-color: #48bb78;
}
</style>
