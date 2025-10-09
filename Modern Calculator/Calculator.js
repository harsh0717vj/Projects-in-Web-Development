const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let input = "";


buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    if (value === "C") {
      input = "";
      display.value = "";
    }
    else if (value === "DEL") {
      input = input.slice(0, -1);
      display.value = input;
    }
    else if (value === "=") {
      try {
        input = eval(input);
        display.value = input;
      } catch {
        display.value = "Error";
        input = "";
      }
    }
    else {
      input += value;
      display.value = input;
    }
  });
});


document.addEventListener("keydown", (e) => {
  const key = e.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '%', '.'].includes(key)) {
    input += key;
    display.value = input;
  } 
  else if (key === "Enter") {
    try {
      input = eval(input);
      display.value = input;
    } catch {
      display.value = "Error";
      input = "";
    }
  } 
  else if (key === "Backspace") {
    input = input.slice(0, -1);
    display.value = input;
  } 
  else if (key === "Escape") {
    input = "";
    display.value = "";
  }
});
