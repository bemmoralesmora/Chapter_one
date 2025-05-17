function pantalla4() {
  // Crear contenedor flip (igual que en pantalla3)
  let flipContainer = document.createElement("div");
  flipContainer.className = "flip-container";

  let flipper = document.createElement("div");
  flipper.className = "flipper";

  // --- PANTALLA FRONTAL ---
  let front = document.createElement("div");
  front.className = "front pantalla4";

  // Elementos existentes de pantalla4
  let h1_p4 = document.createElement("h1");
  h1_p4.textContent = "I love you infinitely";

  let img_p4 = document.createElement("div");
  img_p4.innerHTML = `<img src="./assets/love3.png" alt="">`;
  img_p4.className = "img_p4";

  let yellowShape4 = document.createElement("div");
  yellowShape4.className = "shape yellow-shape4";

  let redShape4 = document.createElement("div");
  redShape4.className = "shape red-shape4";

  // Botón girar (nuevo, como en pantalla3)
  let btn_girar = document.createElement("button");
  btn_girar.className = "btn_girar4";
  btn_girar.textContent = "click here";

  let nota4 = document.createElement("div");
  nota4.className = "nota4";
  nota4.textContent =
    "¡Te amooooooooo infinito y más allá, como no tienes idea!";

  // Ensamblar frontal
  front.append(yellowShape4, redShape4, img_p4, h1_p4, btn_girar, nota4);

  // --- PANTALLA TRASERA ---
  let back = document.createElement("div");
  back.className = "back pantalla_trasera4";

  // Botón regresar
  let btn_regresar = document.createElement("button");
  btn_regresar.className = "btn_regresar4";
  btn_regresar.textContent = "<";

  // Contenido trasero (personalizado para pantalla4)
  let mensajeTrasero = document.createElement("h1");
  mensajeTrasero.textContent = "Eres lo mejor que me ha pasado";

  // Ensamblar trasera
  back.append(btn_regresar, mensajeTrasero);

  // Unir todo
  flipper.append(front, back);
  flipContainer.appendChild(flipper);

  // Event listeners (igual que en pantalla3)
  btn_girar.addEventListener("click", () => {
    flipContainer.classList.add("flipped");
  });

  btn_regresar.addEventListener("click", () => {
    flipContainer.classList.remove("flipped");
  });

  return flipContainer;
}

export { pantalla4 };
