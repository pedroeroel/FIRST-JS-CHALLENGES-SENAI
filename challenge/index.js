let display = document.querySelector('#display')

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const symbols = ['+', '-', '.',  '/', '*', '%', '(', ')']

function appendToDisplay(any) {
    const display = document.getElementById("display");
    const symbols = ["+", "-", "*", "/"];
  
    if (symbols.includes(any) && display.value.length === 0) {
      return;
    }
  
    if (any === "*") {
      const asteriskCount = (display.value.match(/\*/g) || []).length;
      if (asteriskCount >= 2) {
        return;
      }
    }
  
    if (symbols.includes(any)) {
      const lastChar = display.value.slice(-1);
      if (symbols.includes(lastChar) && !(any === "*" && lastChar === "*")) {
        return;
      }
    }
  
    display.value += any;
}

function clearDisplay() {
    display.value = ''
}

function backspace() {
    display.value = display.value.slice(0, -1)
}

function calculate() {
    let result = eval(display.value)
    display.value = result
}

function getCurrentDateTime() {
  const now = new Date();
  
  const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
  };
  
  const formattedDateTime = now.toLocaleString("en-US", options);
  return formattedDateTime;

}


document.querySelector('#about').value = getCurrentDateTime()

function updateDateTime() {
  const now = new Date();

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDateTime = now.toLocaleString("en-US", options);
  document.getElementById("about").textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 60000);