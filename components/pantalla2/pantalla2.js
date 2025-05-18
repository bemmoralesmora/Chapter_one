function pantalla2() {
  // Crear el contenedor principal con efecto flip
  let flipContainer = document.createElement("div");
  flipContainer.className = "flip-container";

  let flipper = document.createElement("div");
  flipper.className = "flipper";

  // Pantalla frontal (contenido original)
  let front = document.createElement("div");
  front.className = "front pantalla2";

  let h1_p2 = document.createElement("h1");
  h1_p2.textContent = "i have a gift for you";

  let imgP2Container = document.createElement("div");
  imgP2Container.className = "img_p2";

  let imgP2 = document.createElement("img");
  imgP2.src = "./assets/gift.png";
  imgP2.alt = "";
  imgP2Container.appendChild(imgP2);

  let yellowShape2 = document.createElement("div");
  yellowShape2.className = "shape yellow-shape2";

  let redShape2 = document.createElement("div");
  redShape2.className = "shape red-shape2";

  let nota2 = document.createElement("div");
  nota2.className = "nota2";
  nota2.textContent =
    "Espero que tu cumpleaños esté lleno de regalos, porque para mí, haberte conocido ya es el mejor que la vida me ha dado.";

  // Botón girar
  let btn_girar = document.createElement("button");
  btn_girar.className = "btn_girar2";
  btn_girar.textContent = "open <3";

  // Ensamblar pantalla frontal
  front.append(
    h1_p2,
    imgP2Container,
    yellowShape2,
    redShape2,
    nota2,
    btn_girar
  );

  // Pantalla trasera
  let back = document.createElement("div");
  back.className = "back pantalla_trasera";

  // Botón regresar
  let btn_regresar = document.createElement("button");
  btn_regresar.className = "btn_regresar2";
  btn_regresar.textContent = "<";

  // Contenido de la pantalla trasera
  let mensajeTrasero = document.createElement("h2");
  mensajeTrasero.textContent =
    "Stephany, te amo con una intensidad que no cabe en palabras,\n" +
    "y te amaré así… sin medida, sin final, sin condición.\n" +
    "Siempre tendrás un lugar eterno en mi corazón,\n" +
    "ese rincón donde solo tú existes y floreces.\n\n";
  // Ensamblar pantalla trasera
  back.append(btn_regresar, mensajeTrasero);

  // Agregar ambas caras al flipper
  flipper.append(front, back);
  flipContainer.appendChild(flipper);

  // Event listeners para los botones
  btn_girar.addEventListener("click", () => {
    flipContainer.classList.add("flipped");
  });

  btn_regresar.addEventListener("click", () => {
    flipContainer.classList.remove("flipped");
  });

  return flipContainer;
}

export { pantalla2 };
