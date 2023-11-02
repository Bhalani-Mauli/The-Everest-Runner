window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const game = new Game();
  game.createScoreIcon();
  game.createScoreCount();
  game.createLivesIcon();
  game.nodeList = [...document.querySelectorAll(".lives-img")];
  startButton.addEventListener("click", function () {
    console.log("start");

    startGame();
  });

  function startGame() {
    console.log("start game");
    game.start();
  }
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeysstrokes = ["ArrowUp", "ArrowRight", "ArrowLeft", " "];

    if (possibleKeysstrokes.includes(key)) {
      event.preventDefault();

      switch (key) {
        case "ArrowUp":
          game.player.jump();
          break;
        case " ":
          game.player.jump();
          break;
        case "ArrowLeft":
          console.log("clicked left");
          game.player.move("left");
          break;
        case "ArrowRight":
          console.log("clicked right");
          game.player.move("right");
          break;
      }
    }
  }
  window.addEventListener("keydown", handleKeydown);

  restartButton.addEventListener("click", function () {
    window.location.reload();
  });
};
