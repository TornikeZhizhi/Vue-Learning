new Vue({
  el: "#app",
  data: {
    front: true,
    winScore: 5,
    gameRunning: true,
    MyInfo: null,
    EnemyInfo: null,
    frontScore: 0,
    backScore: 0
  },
  methods: {
    gameStart: function(event) {
      this.gameRunning = false;
      var ChooseSide = event.currentTarget.innerText;
      if (ChooseSide == "Front") {
        this.MyInfo = "You Are Front Your Score Is";
        this.EnemyInfo = "Enemy is Back";
      } else {
        this.MyInfo = "You Are Back' + Your Score Is";
        this.EnemyInfo = "Enemy is Front";
      }
    },
    playHandler: function() {
      var randomIndex = Math.floor(Math.random() * 2);

      if (randomIndex == 0) {
        this.front = true;
        this.frontScore++;

        if (this.frontScore == this.winScore) {
          if (confirm("You won! New Game?")) {
            this.gameRunning = true;
            this.frontScore = 0;
            this.backScore = 0;
          }
        }
      } else {
        this.backScore++;
        this.front = false;
        if (this.backScore == this.winScore) {
          if (confirm("You Lost! New Game?")) {
            this.gameRunning = true;
            this.frontScore = 0;
            this.backScore = 0;
          }
        }
      }
    }
  }
});
