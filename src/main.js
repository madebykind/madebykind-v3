// Assets
import 'virtual:svg-icons-register';
import "./css/index.css";
// Bootstrap
import setLoaded from "./js/setLoaded";
import initModules from "./js/initModules";
import modulesEnabled from "./js/modulesEnabled";

window.addEventListener("DOMContentLoaded", () => {
  setLoaded(window);
  initModules(modulesEnabled);
});
