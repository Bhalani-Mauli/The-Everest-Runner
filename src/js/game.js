class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameContainer = document.querySelector("#game-container");
    this.gameScreen = document.querySelector("#game-screen");
    this.scoreIcon = document.querySelector("#score");
    this.livesAll = document.querySelector("#lives");
    this.player = new Player(
      this.gameScreen,
      200,
      135,
      100,
      150,
      "../../assets/character/run/r_000.png"
    );
    this.width = window.screen.width;
    this.player.runAnimation(); // from image 1 to image 2 on player
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.points = [new Points(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
  }
  start() {
    console.log("I am in");
    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "block";
    this.gameScreen.style.display = "block";
    setInterval(() => {
      this.update();
    }, 1000 / 20);
  }
  createScoreIcon() {
    const element = document.createElement("img");
    element.classList.add("score-img");
    element.src = "../../assets/score/teaCup.svg";
    this.scoreIcon.appendChild(element);
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
    const obstacle = this.obstacles[0];
    obstacle.move();

    if (obstacle.right > this.width) {
      if (Math.random() > 0.98) {
        obstacle.element.remove();
        this.obstacles = [];
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
    }
    const point = this.points[0];
    point.move();
    if (point.right > this.width) {
      if (Math.random() > 0.98) {
        point.element.remove();
        this.points = [];
        this.points.push(new Points(this.gameScreen));
      }
    }
  }
}
