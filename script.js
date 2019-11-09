new Vue({
  el: "#exercise",
  data: {
    show: true,
    YouTrue: false,
    MonsterTrue: false,
    myWidth: 100,
    monsterWidth: 100,
    damage: {
      mydamage: 0,
      monsterDamage: 0
    }
  },

  methods: {
    attackFunction: function(e) {
      var myRandom = Math.floor(Math.random() * 15);
      var monsterRandom = Math.floor(Math.random() * 15);

      this.damage.mydamage = monsterRandom;
      this.damage.monsterDamage = myRandom;

      document.getElementById("mydamage").innerHTML +=
        "<h3> You Hit - " + monsterRandom + "</h3>";

      document.getElementById("monsterDamage").innerHTML +=
        "<h3> You Hit - " + myRandom + "</h3>";

      myWidthIndex = this.myWidth - myRandom;
      monsterWidthIndex = this.monsterWidth - monsterRandom;

      this.myWidth = myWidthIndex;
      this.monsterWidth = monsterWidthIndex;
      if (this.myWidth <= 0 || this.monsterWidth <= 0) {
        if (this.myWidth <= this.monsterWidth) {
          this.MonsterTrue = true;
          this.show = !this.show;
          this.myWidth = 100;
          this.monsterWidth = 100;
        } else {
          this.YouTrue = true;
          this.show = !this.show;
          this.myWidth = 100;
          this.monsterWidth = 100;
        }
      }
    },

    healHendler: function() {
      var monsterRandom = Math.floor(Math.random() * 15);
      var HealRandom = Math.floor(Math.random() * 20);

      var dd = this;
      dd.myWidth += HealRandom;

      setTimeout(function() {
        dd.myWidth -= monsterRandom;
      }, 500);
    },
    giveUpfunction: function() {
      this.show = !this.show;
      this.myWidth = 100;
      this.monsterWidth = 100;
    }
  }
});
