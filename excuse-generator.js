//Abrir este archivo en un navegador para ver el generador de excusas en acción. 
//Haz clic en el botón para generar una nueva excusa cada vez.
//O ejecuta este archivo en un entorno de Node.js para ver una excusa generada en la consola.

const who = ["Verdeo", "Azulin", "Rojak", "Amarillo"];
const action = ["perdio", "olvido", "rompio", "confundio"];
const what = ["el mapa", "la llave del calabozo", "la bomba de humo", "el botin"];
const when = ["durante la guardia nocturna", "antes de entrar al castillo", "mientras cruzabamos el pantano", "justo al sonar la alarma"];

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateExcuse() {
  return `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(what)} ${getRandomItem(when)}.`;
}

function renderExcuse() {
  const excuseElement = document.getElementById("excuse");
  if (excuseElement) {
    excuseElement.textContent = generateExcuse();
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    renderExcuse();

    const button = document.getElementById("new-excuse-btn");
    if (button) {
      button.addEventListener("click", renderExcuse);
    }
  });
} else {
  console.log(generateExcuse());
}
