new Vue({
  el: "#exercise",
  data: {
    atachRed: false,
    modelName: "giorgi",
    counter: 0,
    secondCounter: 0,
    value: 0,
    color: "green",
    effectClasses: {
      red: true,
      green: false
    },

    width: 10
  },

  computed: {
    stylechanger: function() {
      vm = this;
      var widthX = vm.width;
      setInterval(() => {
        vm.width = widthX + "px";
        widthX += 10;
      }, 300);
    },
    outpoot: function() {
      console.log("computed");
      return this.counter > 10 ? "more than ten" : "less then then";
    },
    colorChanger: function() {
      var xn = this;
      setInterval(() => {
        xn.effectClasses.red = !xn.effectClasses.red;
        xn.effectClasses.green = !xn.effectClasses.green;
      }, 1000);
    },
    result: function() {
      return this.value == 37 ? "not there" : "there";
    },
    divClasses: function() {
      return {
        red: this.atachRed,
        blue: !this.atachRed
      };
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
