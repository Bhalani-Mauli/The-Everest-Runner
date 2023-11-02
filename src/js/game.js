class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameContainer = document.querySelector("#game-container");
    this.gameScreen = document.querySelector("#game-screen");
    this.scoreIcon = document.querySelector("#score");
    this.livesAll = document.querySelector("#lives");
    this.gameEndScreen = document.querySelector("#game-end");
    this.scoreElement = document.querySelector("#scoreCount");
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
    this.gameIsOver = false;
    this.nodeList;
  }
  start() {
    this.startScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.gameContainer.style.display = "block";
    this.gameScreen.style.display = "block";
    setInterval(() => {
      if (this.lives === 0) this.gameEndScreen;
      else this.update();
    }, 1000 / 20);
  }
  createScoreIcon() {
    const element = document.createElement("img");
    element.classList.add("score-img");
    element.src = "../../assets/score/teaCup.svg";
    this.scoreIcon.appendChild(element);
    this.scoreIcon = element;
  }
  createLivesIcon() {
    // here we are creating 3 heart image !
    for (let i = 0; i < this.lives; i++) {
      const element = document.createElement("img");
      element.classList.add("lives-img");
      element.src = "./assets/heart/heart_red.svg";
      this.livesAll.appendChild(element);
    }
  }

  createScoreCount() {
    const element = document.createElement("h2");
    element.textContent = "0";
    // element.classList.add("score-wrapper");
    this.scoreElement.textContent = "0";
  }

  deleteLivesIcon() {
    console.log("STATE NODELIST", this.nodeList);
    this.nodeList[0].remove();
    this.nodeList.shift();
    console.log(this.nodeList);
  }

  update() {
    const obstacle = this.obstacles[0];
    obstacle.move();

    if (this.player.didCollide(obstacle)) {
      // here is the collision happening !
      this.lives--;
      console.log(this.lives);

      this.deleteLivesIcon();

      console.log("You collided with snow man !");
      obstacle.element.remove();
      this.obstacles = [];
      this.obstacles.push(new Obstacle(this.gameScreen));
      if (!this.lives) {
        this.endGame();
      }
    }

    if (obstacle.right > this.width) {
      if (Math.random() > 0.98) {
        obstacle.element.remove();
        this.obstacles = [];
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
    }

    // point;

    const point = this.points[0];
    point.move();

    if (this.player.didCollidePoint(point)) {
      // Player collided with a point
      console.log("You collided with teacup!");
      point.element.remove();
      this.points = [];
      this.points.push(new Points(this.gameScreen));
      // You can add logic here for updating the score or performing other actions.
      // For example: this.score++;
      this.score++;
      this.scoreElement.textContent = this.score;

      console.log(this.score);
    }

    if (point.right > this.width) {
      if (Math.random() > 0.98) {
        point.element.remove();
        this.points = [];
        this.points.push(new Points(this.gameScreen));
      }
    }
  }
  endGame() {
    this.gameIsOver = true;
    this.player.element.remove();
    this.obstacles[0].element.remove();
    this.obstacles = [];
    this.score;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
