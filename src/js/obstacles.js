class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 2000);
    this.top = 580;
    this.width = 100;
    this.element = document.createElement("img");
    this.element.src = "../../assets/obstacle/snowman.svg";
    this.directionX = 0;
    this.element.style.position = "absolute";
    this.element.style.zIndex = 3;
    this.element.style.width = `${this.width}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }
  updatePosition() {
    this.element.style.left = `${5 + this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  move() {
    this.left -= 1;
    this.updatePosition();
  }
}
