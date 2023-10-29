class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameContainer = document.querySelector("#game-container");
    this.gameScreen = document.querySelector("#game-screen");
    this.player = new Player(
      this.gameScreen,
      200,
      120,
      100,
      150,
      "../../assets/character/run/r_000.png"
    );
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
  }
  start() {
    console.log("I am in");
    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "block";
    this.gameScreen.style.display = "block";
  }
  update() {
    this.player.move();
  }
}
