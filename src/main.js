import 'vite/modulepreload-polyfill'
// JS Goes here - ES6 supported

import "./css/index.css";

// Say hello
console.log("Sup?! Edit me in src/main.js");

// Register our Service Worker
// if ("serviceWorker" in navigator) {

//   // attach event listener  on page l aod
//   window.addEventListener("load", () => {

//     // register serviceWorker withthe [sw.js] file
//     navigator.serviceWorker.register("/sw.js").then(registration => {
//       console.log("ServiceWorker registration successful with scope: ", registration.scope);

//     }, function (err) {
//       // registration failed :(
//       console.log("ServiceWorker registration failed: ", err);
//     });
//   });
// }
