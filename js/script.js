var symb = "X";
var field = document.getElementsByClassName("block");
var winner = document.getElementById("winner");

window.onload = () => {
  CreateElements();
};

function CreateElements() {
  var grid = document.getElementById("grid");
  for (let i = 0; i < 9; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "block";
    newDiv.onclick = (e) => Click(e);
    grid.appendChild(newDiv);
  }
}

function Click(e) {
  if (winner.innerHTML == "") {
    e.preventDefault();
    if (e.target.innerHTML === "") {
      symb = symb === "X" ? "0" : "X";
      e.target.innerHTML = symb;
      Check();
    }
  }
}

function Check() {
  for (let index = 0; index < field.length; index += 3) {
    if (field[index].innerHTML != "") {
      if (
        field[index].innerHTML == field[index + 1].innerHTML &&
        field[index].innerHTML == field[index + 2].innerHTML
      ) {
        Winner(field[index].innerHTML);
        field[index].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
        field[index + 1].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
        field[index + 2].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
        return true;
      }
    }
  }

  for (let index = 0; index < 3; index++) {
    if (field[index].innerHTML != "") {
      if (
        field[index].innerHTML == field[index + 3].innerHTML &&
        field[index].innerHTML == field[index + 6].innerHTML
      ) {
        Winner(field[index].innerHTML);
        field[index].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
        field[index + 3].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
        field[index + 6].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
        return true;
      }
    }
  }
  if (field[0].innerHTML != "") {
    if (
      field[0].innerHTML == field[4].innerHTML &&
      field[0].innerHTML == field[8].innerHTML
    ) {
      Winner(field[0].innerHTML);
      field[0].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
      field[4].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
      field[8].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
      return true;
    }
  }
  if (field[2].innerHTML != "") {
    if (
      field[2].innerHTML == field[4].innerHTML &&
      field[2].innerHTML == field[6].innerHTML
    ) {
      Winner(field[2].innerHTML);
      field[2].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
      field[4].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
      field[6].style.backgroundColor = "rgba(99, 129, 101, 0.8)";
      return true;
    }
  }
}

function Winner(symb) {
  winner.style = "display: block;";
  if (symb == "X") {
    winner.innerHTML = "Winner Cross!";
  } else {
    winner.innerHTML = "Winner Zero!";
  }
}
