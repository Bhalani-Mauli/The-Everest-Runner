class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.right = -Math.floor(Math.random() * 100);
    this.bottom = 150;
    this.width = 60;
    this.element = document.createElement("img");
    this.element.src = "../../assets/obstacle/snowman.svg";
    this.element.classList.add("snow-man");
    this.directionX = 0;
    this.element.style.position = "absolute";
    this.element.style.zIndex = 3;
    this.element.style.width = `${this.width}px`;
    this.element.style.right = `${this.right}px`;
    this.element.style.bottom = `${this.bottom}px`;

    this.gameScreen.appendChild(this.element);
  }
  updatePosition() {
    this.element.style.right = `${this.right + 5}px`;
    this.element.style.bottom = `${this.bottom}px`;
  }
  move() {
    this.right += 15;
    this.updatePosition();
  }
}
