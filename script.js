import { pantalla1 } from "./components/pantalla1/pantalla1.js";
import { pantalla2 } from "./components/pantalla2/pantalla2.js";
import { pantalla3 } from "./components/pantalla3/pantalla3.js";
import { pantalla4 } from "./components/pantalla4/pantalla4.js";
import { pantalla5 } from "./components/pantalla5/pantalla5.js";
function cargarDom() {
  let dom = document.querySelector("#root");
  dom.className = "ollie-bg";

  dom.appendChild(pantalla1());
  dom.appendChild(pantalla2());
  dom.appendChild(pantalla3());
  dom.appendChild(pantalla4());
  dom.appendChild(pantalla5());
  return dom;
}

cargarDom();
