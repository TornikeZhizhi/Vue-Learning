var cmp = {
  data: function() {
    return {
      gameName: "critical",
      mode: false
    };
  },
  template:
    "<h1> Server Status {{gameName}} <button @click='statusChanger'>Change</button> </h1>",
  methods: {
    statusChanger: function() {
      this.mode = !this.mode;
      if (this.mode) {
        this.gameName = "Normal";
      } else {
        this.gameName = "Critical";
      }
    }
  }
};

new Vue({
  el: "#app",
  components: {
    "my-app": cmp
  }
});

new Vue({
  el: "#app2",
  components: {
    "my-app": cmp
  }
});
