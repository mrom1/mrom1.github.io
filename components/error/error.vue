<template>
  <div class="errorPageContainer">
    <v-card outlined color="transparent" height="100%">
      <v-img
        max-height="80vh"
        :contain="true"
        src="/images/app/error_general.svg"
      >
        <div class="errorTextContainer">
          <v-row justify="center">
            <strong class="text-green-400">
              {{ errorMessage }}
            </strong>
          </v-row>
        </div>
      </v-img>
      <v-row justify="center" class="pt-4 pr-4">
        <v-btn
          color="primary"
          outlined
          text
          @click="hasHistory() ? $router.back() : $router.push('/')"
          >Go Back</v-btn
        >
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: 'Oops! Something went wrong.'
    }
  },

  head() {
    return {
      title: this.errorMessage
    }
  },

  methods: {
    hasHistory() {
      return window.history.length > 2
    }
  }
}
</script>

<style scoped>
.errorPageContainer {
  max-height: 90vh;
  max-width: 100vw;
}

.errorTextContainer {
  font-size: 4vw;
  font-family: 'Cavolini', sans-serif;
  height: 100%;
  width: 100%;
  transform: translateY(5%);
}
</style>
