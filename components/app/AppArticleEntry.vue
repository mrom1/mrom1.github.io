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
          <!-- Tags for the article -->
          <div v-if="tags.length" class="tagBoxContainer text-sm">
            <span
              v-for="(tag, index) in tags"
              :key="index"
              class="tagBox"
              @click="onTagClick(tag)"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </v-row>
    </v-col>
    <!-- Spacer between tagboxes and divider (horizontal line) before new entry -->
    <div style="height: 10px"></div>
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
    },
    methods: {
      onTagClick(tag) {
        this.$emit('tagClicked', tag)
      }
    }
  }
</script>

<style scoped>
  /* Container for tagBox */
.tagBoxContainer {
  display: flex;
  flex-wrap: wrap; /* Enables wrapping if tags exceed available space */
  align-items: center; /* Aligns items nicely in the row */
  gap: 2px; /* Adds a small space between tagBox elements */
  margin-top: 2px; 
}

/* Style for each tagBox */
.tagBox {
  color: #3e6d8e;
  background-color: #e0eaf1;
  border-bottom: 1px solid #3e6d8e;
  border-right: 1px solid #7f9fb6;
  padding: 3px 4px 3px 4px;
  margin: 2px 2px 2px 0;
  text-decoration: none;
  font-size: 90%;
  line-height: 1.25;
  white-space: nowrap;
  cursor: pointer;
}

/* Hover effect for tagBox */
.tagBox:hover {
  background-color: #a1c5e4;
}

/* Ensure proper alignment for description container */
.articleEntryDescriptionContainer {
  justify-content: center;
}

/* Padding for article entry container */
.articleEntryContainer {
  padding-top: 10px
}
</style>
