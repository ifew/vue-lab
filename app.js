window.onload = function() {
//https://api.nytimes.com/svc/topstories/v2/home.json?api-key=zDDMXw9t80Jlaa3bVOqQ23xNeMlwTy37
const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "zDDMXw9t80Jlaa3bVOqQ23xNeMlwTy37";

function buildUrl (url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey
}

const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted () {
    this.getPosts('home');
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch( error => { console.log(error); });
    }
  }
});
};