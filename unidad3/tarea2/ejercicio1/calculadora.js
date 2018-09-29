var btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", sumar);

var btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", restar);

var btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", multiplicar);

var btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", dividir);

var btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", residuo);

//funciones
function sumar(){
  var num1 = document.querySelector("#num1");
  var num2 = document.querySelector("#num2");

  var resInput = Number(num1.value) + Number(num2.value);

  var res = document.querySelector("#resultado");
  res.value= resInput;
}

function restar(){
  var num1 = document.querySelector("#num1");
  var num2 = document.querySelector("#num2");

  var resInput = Number(num1.value) - Number(num2.value);

  var res = document.querySelector("#resultado");
  res.value= resInput;
}
function multiplicar(){
  var num1 = document.querySelector("#num1");
  var num2 = document.querySelector("#num2");

  var resInput = Number(num1.value) * Number(num2.value);

  var res = document.querySelector("#resultado");
  res.value= resInput;
}
function dividir(){
  var num1 = document.querySelector("#num1");
  var num2 = document.querySelector("#num2");

  var resInput = Number(num1.value) / Number(num2.value);

  var res = document.querySelector("#resultado");
  res.value= resInput;
}
function residuo(){
  var num1 = document.querySelector("#num1");
  var num2 = document.querySelector("#num2");

  var resInput = Number(num1.value) % Number(num2.value);

  var res = document.querySelector("#resultado");
  res.value= resInput;
}
