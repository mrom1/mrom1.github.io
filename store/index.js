export const state = () => ({
  articleDescription: {
    title: '',
    toc: []
  }
})

export const mutations = {
  CHANGE_NAV_ARTICLE_DESCRIPTION(state, articleDescription) {
    state.articleDescription.title = articleDescription.title
    state.articleDescription.toc = articleDescription.toc
  }
}
