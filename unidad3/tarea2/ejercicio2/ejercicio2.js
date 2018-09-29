var cen = document.querySelector("#cen");
cen.addEventListener("click", centigrados);

var fah = document.querySelector("#fah");
fah.addEventListener("click", fahrenheit);

//funciones
function centigrados(){
  var grados = document.querySelector("#grados");

  var conversion= Number(grados.value) * 1.8000 + 32.00;

  var res = document.querySelector("#res");
  res.value = conversion;
}

function fahrenheit(){
  var grados = document.querySelector("#grados");

  var conversion= Number(grados.value) - 32.00 / 1.8000;

  var res = document.querySelector("#res");
  res.value = conversion;
}
