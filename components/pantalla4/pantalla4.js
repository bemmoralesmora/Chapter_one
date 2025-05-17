function pantalla4() {
  let pantalla4 = document.createElement("div");
  pantalla4.className = "pantalla4";

  let yellowShape4 = document.createElement("div");
  yellowShape4.className = "shape yellow-shape4";

  let redShape4 = document.createElement("div");
  redShape4.className = "shape red-shape4";

  pantalla4.append(yellowShape4, redShape4);

  return pantalla4;
}

export { pantalla4 };
