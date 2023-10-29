class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameContainer = document.querySelector("#game-container");
    this.gameScreen = document.querySelector("#game-screen");
    this.livesAll = document.querySelector("#lives");
    this.player = new Player(
      this.gameScreen,
      200,
      135,
      100,
      150,
      "../../assets/character/run/r_000.png"
    );
    this.player.run();
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
  createLivesIcon() {
    for (let i = 0; i < this.lives; i++) {
      const element = document.createElement("img");
      element.classList.add("lives-img");
      element.src = "./assets/heart/heart_red.svg";
      this.livesAll.appendChild(element);
    }
  }
  update() {
    this.player.move();
  }
}
