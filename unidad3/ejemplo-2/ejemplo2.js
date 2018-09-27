var btnCal = document.querySelector("#button");
btnCal.addEventListener("click", sumar);

function sumar(){
  var num1 = document.querySelector("#num1");
  var num2 = document.querySelector("#num2");


  var resul = Number(num1.value) + Number(num2.value);
  var res = document.querySelector("#resultado");
  res.value = resul;
}
