// Assets
import 'virtual:svg-icons-register';
import "./css/index.css";
// Bootstrap
import setLoaded from "./js/setLoaded";
import initModules from "./js/initModules";
import modulesEnabled from "./js/modulesEnabled";

// JS Goes here - ES6 supported
console.log("Sup?! Edit me in src/main.js");

// Vue.config.productionTip = false;

window.addEventListener("DOMContentLoaded", () => {
  setLoaded(window);
  initModules(modulesEnabled);
});
