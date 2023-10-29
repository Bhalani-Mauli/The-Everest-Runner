window.onload = function () {
  const startButton = document.getElementById("start-button");
  const game = new Game();

  startButton.addEventListener("click", function () {
    console.log("start");
    startGame();
  });

  function startGame() {
    console.log("start game");
    game.start();
  }
};
