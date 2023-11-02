class Points {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.right = -Math.floor(Math.random() * 100);
    this.screenWidth = window.screen.width;
    this.bottom = 340;
    this.width = 60;
    this.element = document.createElement("img");
    this.element.src = "../../assets/score/teaCup.svg";
    this.element.style.position = "absolute";
    this.element.style.zIndex = 4;
    this.element.style.width = `${this.width}px`;
    this.element.style.right = `${this.right}px`;
    this.element.style.bottom = `${this.bottom}px`;

    this.gameScreen.appendChild(this.element);
  }
  updatePosition() {
    this.element.style.right = `${this.right - 5}px`;
    this.element.style.bottom = `${this.bottom}px`;
  }
  move() {
    this.right += 12;
    this.updatePosition();
  }
}
