const field = document.querySelector(".text");
let button = document.querySelector("#start");

function show() {
  button.classList.toggle("show")
  console.log("loaded");
}


let tu = new Audio('https://raw.githubusercontent.com/briang17/briang17.github.io/master/months/tu.m4a');
tu.volume = 0.1;
window.onload = show;

const poem = ["más de seis veces.",
  "he pensado, implorado;",
  "que queden menos meses",
  "para tenerte a mi lado.",
  "más de seis veces.",
  "he tomado conciencia;",
  "aunque el tiempo pase como lombrices;",
  "te esperaré hasta perder la cuenta.",
  "seis y mil veces.",
  "he podido decirte",
  "cómo con creces",
  "siempre voy a amarte",
  "por seis y mil meses",
  "pienso elegirte a ti",
  "y cuantas veces haga falta",
  "besarte, ser feliz."
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
  if ((count) % 4 === 0) {
    let br = document.createElement("br");
    target.appendChild(br);
    target.appendChild(p);
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