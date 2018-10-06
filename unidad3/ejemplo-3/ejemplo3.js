var btn = document.querySelector('#button');
btn.addEventListener('click', condicion);
var InputNum = document.querySelector('#num');
var pRes = document.querySelector('#resultado')

var selOpc = document.querySelector('#select');
selOpc.addEventListener('change', opcionesSwitch)

function condicion(){
  var numero = Number(InputNum.value);

  if (numero > 0) {
    pRes.textContent = 'El numero ' + numero + ' es positivo';
  }if (numero < 0) {
    pRes.textContent = 'El numero ' + numero + ' es negativo';
  }if (numero == 0) {
    pRes.textContent = 'El numero es ' + numero ;
  }
}

function opcionesSwitch(){
  var numero = Number(InputNum.value);
  var opc = selOpc.value;

  switch(opc){
    case 'mitad':
    pRes.textContent = 'la mitad de ' +numero+ ' es ' + (numero / 2);
    break;

    case 'cuadrado':
    pRes.textContent = 'El cuadrado de ' +numero+ ' es ' + (numero * numero);
    break;

    case 'par':
    if (numero%2 === 0) {
      pRes.textContent = "El numero es par";
    }else {
      pRes.textContent = "El numero es impar";
    }
    break;
    default:
    pRes.textContent = "hueles a cola";
  }

}

function opciones(){
  var numero = Number(InputNum.value);
  var opcion = selOpc.value;

  if (opcion === 'mitad') { // === muy exacto. reconoce tipos de datos
    pRes.textContent = 'la mitad de ' +numero+ ' es ' + (numero / 2);
  }
  if (opcion === 'cuadrado') {
    pRes.textContent = 'El cuadrado de ' +numero+ ' es ' + (numero * numero);
  }
  if (opcion === 'par') {
    if (numero%2 === 0) {
      pRes.textContent = "El numero es par";
    }else {
      pRes.textContent = "El numero es impar";
    }
  }
}
