class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.right = -Math.floor(Math.random() * 100);
    this.top = 600;
    this.width = 60;
    this.element = document.createElement("img");
    this.element.src = "../../assets/obstacle/snowman.svg";
    this.directionX = 0;
    this.element.style.position = "absolute";
    this.element.style.zIndex = 3;
    this.element.style.width = `${this.width}px`;
    this.element.style.right = `${this.right}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }
  updatePosition() {
    this.element.style.right = `${this.right + 5}px`;
    this.element.style.top = `${this.top}px`;
  }
  move() {
    this.right += 20;
    this.updatePosition();
  }
}
