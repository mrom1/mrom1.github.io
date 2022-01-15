<template>
  <div class="articleEntryContainer">
    <v-col>
      <v-row>
        <div class="articleEntryTitleContainer">
          <NuxtLink :to="{ name: 'articles-slug', params: { slug: slug } }">
            {{ title }}
          </NuxtLink>
        </div>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <div class="articleEntryDescriptionContainer">
          <v-icon size="14">mdi-calendar</v-icon>
          <span class="text-white text-sm">{{ date }}</span>
          -
          <v-icon size="14">mdi-clock</v-icon>
          <span class="text-white text-sm">{{ readingTime }}</span>
          <!-- tags for the article -->
          <div v-if="tags.length" style="display: inline-block" class="text-sm">
            -
            <span v-for="(tag, index) in tags" :key="index" class="tagBox">{{
              tag
            }}</span>
          </div>
        </div>
      </v-row>
    </v-col>
    <v-divider />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    date: {
      type: String,
      required: true
    },

    readingTime: {
      type: String,
      required: true
    },

    tags: {
      type: Array,
      required: true
    },

    slug: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.tagBox {
  color: #3e6d8e;
  background-color: #e0eaf1;
  border-bottom: 1px solid #3e6d8e;
  border-right: 1px solid #7f9fb6;
  padding: 3px 4px 3px 4px;
  margin: 2px 2px 2px 0;
  text-decoration: none;
  font-size: 90%;
  line-height: 2.4;
  white-space: nowrap;
}

.articleEntryDescriptionContainer {
  justify-content: center;
}
</style>
