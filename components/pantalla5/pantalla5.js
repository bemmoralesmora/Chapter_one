function pantalla5() {
  let pantalla5 = document.createElement("div");
  pantalla5.className = "pantalla5";

  let yellowShape5 = document.createElement("div");
  yellowShape5.className = "shape yellow-shape5";

  let redShape5 = document.createElement("div");
  redShape5.className = "shape red-shape5";

  pantalla5.append(yellowShape5, redShape5);

  return pantalla5;
}

export { pantalla5 };
