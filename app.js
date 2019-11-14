window.onload = function() {
  const vm = new Vue({
    el: '#app',
    data: {
      results: []
    },
    mounted() {
      axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=zDDMXw9t80Jlaa3bVOqQ23xNeMlwTy37")
      .then(response => {this.results = response.data.results})
    }
  });
};
