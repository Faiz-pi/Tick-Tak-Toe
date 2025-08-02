let playerX = document.getElementById("x");
let playerO = document.getElementById("o");

let winnerMessage = document.getElementsByClassName("winner-message");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let fillCount = 0;

let inputs = document.querySelectorAll(".game-center input");
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    let symbol;
    if (playerX.hasAttribute("checked")) {
      input.value = "X";
      symbol = "X";
      playerX.removeAttribute("checked");
      playerO.setAttribute("checked", "checked");
      fillCount += 1;
    } else {
      input.value = "O";
      symbol = "O";
      playerO.removeAttribute("checked");
      playerX.setAttribute("checked", "checked");
      fillCount += 1;
    }

    input.style.backgroundColor = "whitesmoke";
    input.setAttribute("disabled", "disabled");

    winPatterns.forEach((pattern) => {
      const [a, b, c] = pattern;

      if (
        inputs[a].value === symbol &&
        inputs[b].value === symbol &&
        inputs[c].value === symbol
      ) {
        winnerMessage[0].innerHTML = `Player ${symbol} wins!`;

        inputs.forEach((input) => {
          input.setAttribute("disabled", "disabled");
        });
      }
    });

    if (fillCount === 9) {
      winnerMessage[0].innerHTML = "It's a draw!";
    }
  });
});

function newGame() {
  inputs.forEach((input) => {
    input.value = "";
    input.style.backgroundColor = "transparent";
    input.removeAttribute("disabled");
  });
  playerO.removeAttribute("checked");
  playerX.setAttribute("checked", "checked");
  winnerMessage[0].innerHTML = "";

  fillCount = 0;
}
