const field = document.querySelector(".text");
let button = document.querySelector("#start");

function show() {
  button.classList.toggle("show")
}

let tu = new Audio('https://raw.githubusercontent.com/briang17/briang17.github.io/master/months/tu.m4a');
tu.volume = 0.1;
window.onload = show;

const poem = ["hola, amor ;)",
"desde que me dijiste",
"que no estás acostumbrada a esto",
"voy muy pensativo,",
"pero te veo en mis planes",
"break",
"primero, te quiero. por eso escribo esto.",
"sonará pronto, pero es así",
"siento que voy muy rápido contigo",
"que quiero el mundo, en un 2x3",
"quiero saber si sientes que es demasiado",
"porque me importas, y quiero que estés tranquila.",
"break",
"adoro las sensaciones",
"como las mariposas en el estomago",
"y los nervios que me dan antes de verte",
"pero también quiero que nos sintamos",
"como en casa, con una fogata, seguros.",
"break",
"todo esto, no es solo un impulso",
"también he meditado",
"y hablado conmigo mismo",
"sé lo que quiero",
"¿tu sabes lo que quieres?",
"break",
"pensando mucho en -esto-",
"y luego de pasar días haciendo mente,",
"caí en cuenta;",
"¿por qué nos decimos amor?",
"¿lo sentimos?",
"(no sé escribir, y jamás había hecho algo así, tu me diste ganas)",
"claro que nos nació y,",
"no te puedo describir lo bonito que es",
"que estés aquí.",
"De ahí surgen mis preguntas.",
"yo no suelto cariño tan fácil,",
"ni tan rápido",
"ni buscaba a quien llamar corazón",
"(ya sé que no te había dicho así,",
"te lo diré antes de que leas esto sjajsdajs)",
"pero algo nos puso aquí",
"y aquí me gusta :)",
"me has dicho que soy bien inteligente",
"pero soy bien bruto",
"pa las señales",
"dime, luz verde?",
"porque te veo en mi futuro,",
"y quiero saber si en el tuyo",
"aún nos decimos amor",
"break",
"<3"

]

const drawLine = (line, target, count = 0, array = []) => {
  if (line) {
    setTimeout(() => {
      target.textContent += line[count];
      count++;
      if (count === line.length) {
        renderLine(poem, field, array);
        return;
      } else {
        drawLine(line, target, count);
      }
    }, 140)
  }
}

const addLine = (line, target, count, array = []) => {
  let p = document.createElement("p");
  drawLine(line, p, 0, array);
  /*if ((count) % 4 === 0) {
    let br = document.createElement("br");
    target.appendChild(br);
    target.appendChild(p);
  } else { */
  if (line === "break") {
    let br = document.createElement("br");
    target.appendChild(br);
  } else {
    target.appendChild(p);
  }
}

let counter = 0;

const play = () => { tu.play() }

const unHide = () => {
  document.querySelector("#title").classList.toggle("hidden")
  document.querySelector("#text").classList.toggle("hidden")
}
button.addEventListener("click", play);
button.addEventListener("click", unHide);

const renderLine = (text, target) => {
  let line = text.shift();
  addLine(line, target, counter++, text);
  console.log(counter);
}
