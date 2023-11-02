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
    this.isJumping = false;
  }

  move(direction) {
    if (this.left < 0) return;
    if (direction === "right") {
      this.left += 10;
    } else {
      this.left -= 10;
    }
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }

  runAnimation() {
    let current = this.element.src;
    setInterval(() => {
      if (this.element.src == current) {
        this.element.src = "../../assets/character/run/r_004.png";
      } else {
        this.element.src = current;
      }
    }, 200);
  }

  jump() {
    if (this.isJumping) return;
    this.isJumping = true;
    this.element.style.bottom = 330 + "px";
    setTimeout(() => {
      this.isJumping = false;
      this.element.style.bottom = 130 + "px";
    }, 500);
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
