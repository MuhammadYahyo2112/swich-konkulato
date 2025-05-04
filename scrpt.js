let a = Number(prompt("1-soni kriting"));
let b = Number(prompt("2-soni kriting"));
let amal = prompt("Amalni kiriting \n +\n -\n *\n /");

let h1 = document.querySelector("h1");
let body = document.body;

let javob = "Javob \n"

switch (amal) {
  case "+":
    javob = `${a} + ${b} = ${a + b}`;

    break;

  case "-":
    javob = `${a} - ${b} = ${a - b}`;
   
    break;

  case "*":
    javob = `${a} * ${b} = ${a * b}`;
    
    
    break;

  case "/":
    
      javob = `${a} / ${b} = ${a / b}`;
    break;

  default:
    javob = "Noto'g'ri";
}

body.append(h1);
alert(javob)

