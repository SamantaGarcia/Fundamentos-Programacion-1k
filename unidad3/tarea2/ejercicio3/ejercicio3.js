var area = document.querySelector("#area");
area.addEventListener("click", calcular);

function calcular(){
  var base = document.querySelector("#base");
  var altura = document.querySelector("#altura");

  var operacion= (Number(base.value) * Number(altura.value)) /2;

  var res = document.querySelector("#res");
  res.value = operacion;

}
