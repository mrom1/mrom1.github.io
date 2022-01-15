import Vue from 'vue'
Vue.mixin({
  methods: {
    convertDateToLocalTime(utc) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(utc).toLocaleDateString('en', options)
    },

    stripHttpFromUrl(url) {
      return url.replace(/(^\w+:|^)\/\//, '')
    }
  }
})
