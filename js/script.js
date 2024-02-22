// 1. Creazione del contenitore
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

console.log(container);

// 2. Ciclo for
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (output === "") output = i;

  // 3. Creazione dell'elemento .box
  let box = document.createElement('div');
  box.className = 'box';
  box.textContent = output;
  
  // 4. (Bonus 1) Aggiunta dell'elemento .box all'elemento contenitore
  container.appendChild(box);

// 5. (Bonus 2) background color per le box con contenuto Fizz, Buzz ed entrambe
if (output ==="Fizz") box.style.backgroundColor = "rgb(12, 214, 161)"
if (output==="Buzz") box.style.backgroundColor = "rgb(255, 209, 102)"
if (output === "FizzBuzz") box.style.backgroundColor = "rgb(240, 70, 111)"
}