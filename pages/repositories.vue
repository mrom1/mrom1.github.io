<template>
  <div>
    <div v-show="$vuetify.breakpoint.lgAndDown">
      <div v-for="project in projects" :key="project.id" class="pt-10">
        <AppProjectEntry
          :slug="project.slug"
          :title="project.title"
          :description="project.description"
          :img="project.img"
          :repositoryname="project.repositoryname"
          :repositoryurl="project.repositoryurl"
        />
      </div>
    </div>
    <div v-show="$vuetify.breakpoint.xlOnly">
      <div
        v-for="projectsPair in chunkedProjectsContent"
        :key="projectsPair.id"
      >
        <v-row align="center" justify="center">
          <div v-for="project in projectsPair" :key="project.id" class="p-10">
            <v-col cols="12">
              <AppProjectEntry
                :slug="project.slug"
                :title="project.title"
                :description="project.description"
                :img="project.img"
                :repositoryname="project.repositoryname"
                :repositoryurl="project.repositoryurl"
              />
            </v-col>
          </div>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import chunk from 'chunk'

export default {
  async asyncData({ $content, params }) {
    const projects = await $content('projects')
      .only([
        'title',
        'description',
        'img',
        'repositoryname',
        'repositoryurl',
        'slug'
      ])
      .sortBy('title', 'asc')
      .fetch()
    return {
      projects
    }
  },

  head() {
    return {
      title: 'Projects'
    }
  },

  computed: {
    chunkedProjectsContent() {
      return chunk(this.projects)
    }
  }
}
</script>
