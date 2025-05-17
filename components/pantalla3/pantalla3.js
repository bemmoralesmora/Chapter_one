function pantalla3() {
  // Crear contenedor flip
  let flipContainer = document.createElement("div");
  flipContainer.className = "flip-container";

  let flipper = document.createElement("div");
  flipper.className = "flipper";

  // --- PANTALLA FRONTAL ---
  let front = document.createElement("div");
  front.className = "front pantalla3";

  // Elementos existentes
  let h1_p3 = document.createElement("h1");
  h1_p3.textContent = "my love";

  let img_p3 = document.createElement("div");
  img_p3.innerHTML = `<img src="./assets/catnap.png" alt="">`;
  img_p3.className = "img_p3";

  let yellowShape3 = document.createElement("div");
  yellowShape3.className = "shape yellow-shape3";

  let redShape3 = document.createElement("div");
  redShape3.className = "shape red-shape3";

  let whiteRectangle = document.createElement("div");
  whiteRectangle.className = "shape white-rectangle";

  // Botón girar (nuevo)
  let btn_girar = document.createElement("button");
  btn_girar.className = "btn_girar3";
  btn_girar.textContent = "click here";

  let nota3 = document.createElement("div");
  nota3.className = "nota3";
  nota3.textContent =
    "Eres el amor de mi vida, y cada instante de felicidad en mí lleva tu nombre, my love.";

  // Ensamblar frontal
  front.append(
    h1_p3,
    yellowShape3,
    redShape3,
    whiteRectangle,
    img_p3,
    btn_girar,
    nota3
  );

  // --- PANTALLA TRASERA ---
  let back = document.createElement("div");
  back.className = "back pantalla_trasera3";

  // Botón regresar
  let btn_regresar = document.createElement("button");
  btn_regresar.className = "btn_regresar3";
  btn_regresar.textContent = "<";

  // Contenido trasero
  let mensajeTrasero = document.createElement("h1");
  mensajeTrasero.textContent = "Eres mi persona favorita";

  // Ensamblar trasera
  back.append(btn_regresar, mensajeTrasero);

  // Unir todo
  flipper.append(front, back);
  flipContainer.appendChild(flipper);

  // Event listeners
  btn_girar.addEventListener("click", () => {
    flipContainer.classList.add("flipped");
  });

  btn_regresar.addEventListener("click", () => {
    flipContainer.classList.remove("flipped");
  });

  return flipContainer;
}

export { pantalla3 };
