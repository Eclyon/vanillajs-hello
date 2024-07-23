/* eslint-disable */
window.onload = function() {
  //write your code here

  var who = ["Mi Perro", "Mi Abuela", "El Cartero", "Un Pajaro"];
  var action = ["se comio", "rayo", "destruyo", "corto"];
  var what = ["mi cuaderno", "mi celular", "mi cartera", "mi pc"];
  var when = [
    "despues de clases",
    "mientras estaba durmiendo",
    "cuando estaba distraido",
    "mientras estaba comiendo"
  ];

  function generateExcuse() {
    var randomWho = who[Math.floor(Math.random() * who.length)];
    var randomAction = action[Math.floor(Math.random() * action.length)];
    var randomWhat = what[Math.floor(Math.random() * what.length)];
    var randomWhen = when[Math.floor(Math.random() * when.length)];

    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    document.getElementById("excuse").innerHTML = excuse;
  }

  document
    .getElementById("generate-button")
    .addEventListener("click", generateExcuse);
  generateExcuse();
};
