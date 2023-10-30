window.onload = function () {
  const startButton = document.getElementById("start-button");
  const game = new Game();
  game.createScoreIcon();
  game.createLivesIcon();

  startButton.addEventListener("click", function () {
    console.log("start");
    startGame();
  });

  function startGame() {
    console.log("start game");
    game.start();
  }
};
