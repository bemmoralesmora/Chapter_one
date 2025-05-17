function pantalla1() {
  // Creo el flip-container y el flipper
  let flipContainer = document.createElement("div");
  flipContainer.className = "flip-container";

  let flipper = document.createElement("div");
  flipper.className = "flipper";

  // Pantalla frontal
  let pantalla = document.createElement("div");
  pantalla.className = "front pantalla";

  let h1 = document.createElement("h1");
  h1.textContent = "HAPPY BIRTHDAY";

  let imgContainer = document.createElement("div");
  imgContainer.className = "img";
  let img = document.createElement("img");
  img.src = "assets/love4.png";
  img.alt = "";
  imgContainer.appendChild(img);

  let yellowShape = document.createElement("div");
  yellowShape.className = "shape yellow-shape";
  let redShape = document.createElement("div");
  redShape.className = "shape red-shape";

  let nota = document.createElement("div");
  nota.textContent = "Sabias que el amor que siento por ti es muy grande !!";
  nota.className = "nota";

  // Botón girar
  let btn_girar = document.createElement("button");
  btn_girar.textContent = "click here";
  btn_girar.className = "btn_girar";

  // Ensamblo frontal
  pantalla.append(h1, imgContainer, yellowShape, redShape, btn_girar, nota);

  // Pantalla trasera
  let pantalla_trasera = document.createElement("div");
  pantalla_trasera.className = "back pantalla_trasera";

  let btn_regresar = document.createElement("button");
  btn_regresar.className = "btn_regresar";
  btn_regresar.textContent = "<";
  pantalla_trasera.appendChild(btn_regresar);

  let mensajeTrasero = document.createElement("h2");
  mensajeTrasero.textContent = "¡Feliz Cumpleaños!";
  pantalla_trasera.appendChild(mensajeTrasero);

  // Inserto ambas caras en el flipper
  flipper.append(pantalla, pantalla_trasera);
  flipContainer.appendChild(flipper);

  // Eventos para girar y regresar
  btn_girar.addEventListener("click", () => {
    flipContainer.classList.add("flipped");
  });

  // Modificamos solo el evento del botón regresar
  btn_regresar.addEventListener("click", () => {
    flipContainer.classList.remove("flipped");
  });

  return flipContainer;
}

export { pantalla1 };
