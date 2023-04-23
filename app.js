const app = Vue.createApp({
    data() {
      return {
        currentPage: 'home'
      }
    },
    methods: {
      changePage(pageName) {
        this.currentPage = pageName
      }
    }
  })
  app.mount('body')
  