<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card height="100%" class="mx-auto overflow-hidden">
    <v-navigation-drawer
      width="256px"
      color="rgb(50, 50, 80, 0.5)"
      :clipped="true"
      :permanent="$vuetify.breakpoint.mdAndUp"
      app
      fixed
    >
      <div class="sidebarContentContainer">
        <v-list-item>
          <v-list-item-content align="center">
            <v-list-item-title class="title">
              <v-img
                eager
                lazy-src="/images/profile/github_profile_picture_small.png"
                max-height="100%"
                max-width="100%"
                src="/images/profile/github_profile_picture_large.png"
              />
            </v-list-item-title>
            <v-list-item-subtitle>
              <br />
              <!-- Render quote with line breaks and author -->
              <p>
                <em>
                  &ldquo;<span v-html="currentQuote.text"></span>&rdquo;
                </em>
              </p>
              <p class="text-xs">― {{ currentQuote.author }}</p>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <AppSidebarLinks />
      </div>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    name: 'AppSidebarHome',

    // The 'vue/no-v-html' rule is disabled here because we are using the `v-html` directive
    // to render hardcoded HTML content (line breaks in quotes). There is no user input involved,
    // and the content is controlled and fixed within the code itself, thus eliminating the risk of
    // XSS (Cross-Site Scripting) attacks. Disabling the warning is considered safe in this case.
    rules: {
      'vue/no-v-html': ['off']
    },

    // Collection of quotes to choose from
    data() {
      return {
        quotes: [
          {
            text: 'Cut until there is nothing <br /> left to cut and all there <br /> is left is principled <br /> and fundamental.',
            author: 'Bjarne Stroustrup'
          },
          {
            text: 'The purpose of  <br /> software engineering is  <br /> to control complexity,  <br /> not to create it.',
            author: 'Bjarne Stroustrup'
          },
          {
            text: 'The only way to deal with <br /> the most dangerous thing <br /> in software development <br /> — complexity — <br /> is through simplicity.',
            author: 'Richard Stallman'
          },
          {
            text: 'Premature optimization <br /> is the root of all evil.',
            author: 'Donald Knuth'
          },
          {
            text: 'Talk is cheap.<br /> Show me the code.',
            author: 'Linus Torvalds'
          },
          {
            text: 'We don’t have to build <br /> the system we want.<br /> We only have to build <br /> a system that works.',
            author: 'Richard Hamming'
          },
          {
            text: 'Refactoring is a way <br /> to pay down technical debt <br /> before it accumulates <br /> so much that it impedes <br /> future progress.',
            author: 'Martin Fowler'
          },
          {
            text: 'The nice thing about <br /> standards is that there <br /> are so many of them <br /> to choose from.',
            author: 'Andrew S. Tanenbaum'
          },
          {
            text: 'You will find the most <br /> useful information in the <br /> least likely places.',
            author: 'Richard Hamming'
          },
          {
            text: 'The best way to learn <br /> is to teach. <br /><br /> The best way to teach <br /> is to write. <br /><br /> The best way to write <br /> is to code.',
            author: 'Jeff Atwood'
          }
        ],
        currentQuote: {}
      }
    },
    watch: {
      // Watch for route changes to trigger the quote change
      $route(to, from) {
        this.randomQuote() // Update the quote when the route changes
      }
    },
    mounted() {
      this.randomQuote() // Call random quote on initial setup
    },
    methods: {
      randomQuote() {
        let randomIndex = Math.floor(Math.random() * this.quotes.length)

        // If currentQuote is already set, avoid picking the same quote again
        if (this.currentQuote.text === this.quotes[randomIndex].text) {
          randomIndex = (randomIndex + 1) % this.quotes.length // pick the next one (with wraparound)
        }

        this.currentQuote = this.quotes[randomIndex]
      }
    }
  }
</script>

<style scoped>
  .sidebarContentContainer {
  padding: 20px;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.text-xs {
  font-size: 0.75rem;
  color: #b0b0b0;
}
</style>
