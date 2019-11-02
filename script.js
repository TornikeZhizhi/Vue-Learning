new Vue({
  el: "#exercise",
  data: {
    modelName: "giorgi",
    counter: 0,
    secondCounter: 0,
    value: 0
  },

  computed: {
    outpoot: function() {
      console.log("computed");
      return this.counter > 10 ? "more than ten" : "less then then";
    },
    result: function() {
      return this.value == 37 ? "not there" : "there";
    }
  },
  watch: {
    value: function() {
      var vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, 2000);
    }
  },

  methods: {
    results: function() {
      console.log("method");
      return this.counter > 10 ? "more than ten" : "less then then";
    }
  }
});
