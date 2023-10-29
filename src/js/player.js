class Player {
  constructor(gameScreen, left, bottom, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = imgSrc;

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
    this.element.style.zIndex = 3;
    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left += this.directionX;
    this.bottom += this.directionY;
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
  }

  run() {
    let current = this.element.src;
    setInterval(() => {
      if (this.element.src == current) {
        this.element.src = "../../assets/character/jump/j_003.png";
      } else {
        this.element.src = current;
      }
    }, 500);
  }
}
