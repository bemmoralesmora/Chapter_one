function pantalla5() {
  // Crear contenedor flip (igual que en pantalla4)
  let flipContainer = document.createElement("div");
  flipContainer.className = "flip-container";

  let flipper = document.createElement("div");
  flipper.className = "flipper";

  // --- PANTALLA FRONTAL ---
  let front = document.createElement("div");
  front.className = "front pantalla5";

  // Elementos existentes de pantalla5
  let h1_p5 = document.createElement("h1");
  h1_p5.textContent = "Figaro loves you very much";

  let img_p5 = document.createElement("div");
  img_p5.innerHTML = `<img src="./assets/figaro.png" alt="">`;
  img_p5.className = "img_p5";

  let yellowShape5 = document.createElement("div");
  yellowShape5.className = "shape yellow-shape5";

  let redShape5 = document.createElement("div");
  redShape5.className = "shape red-shape5";

  // Botón girar (como en pantalla4)
  let btn_girar = document.createElement("button");
  btn_girar.className = "btn_girar5";
  btn_girar.textContent = "click here";

  let nota5 = document.createElement("div");
  nota5.className = "nota5";
  nota5.textContent =
    "¡Hola, mi humana favorita! Te quiero muchísimo y te extraño un montón. ¡Feliz cumpleaños!";

  // Ensamblar frontal
  front.append(yellowShape5, redShape5, h1_p5, img_p5, btn_girar, nota5);

  // --- PANTALLA TRASERA ---
  let back = document.createElement("div");
  back.className = "back pantalla_trasera5";

  // Botón regresar
  let btn_regresar = document.createElement("button");
  btn_regresar.className = "btn_regresar5";
  btn_regresar.textContent = "<";

  // Contenido trasero (personalizado para pantalla5)
  let mensajeTrasero = document.createElement("h3");
  mensajeTrasero.textContent =
    "Hola, Stephany. Espero que tengas un hermoso cumpleaños.\nDesde acá te mando muchos besitos (como los que tú siempre me mandas), y ya hacen falta unos míos por allá.\nPor cierto, te quiero mucho… gracias por estar junto a mi humano.\nNo sabes lo loco que está por ti. Yo vi todo lo que hizo por ti, y de verdad, nunca lo había visto así.\nTe extraño. <3\n—Con amor, Figaro. 🐾";

  // Ensamblar trasera
  back.append(btn_regresar, mensajeTrasero);

  // Unir todo
  flipper.append(front, back);
  flipContainer.appendChild(flipper);

  // Event listeners (igual que en pantalla4)
  btn_girar.addEventListener("click", () => {
    flipContainer.classList.add("flipped");
  });

  btn_regresar.addEventListener("click", () => {
    flipContainer.classList.remove("flipped");
  });

  return flipContainer;
}

export { pantalla5 };
