const $monedas = document.querySelector('#monedas');
const $enviar = document.querySelector('#enviar');

function obtenerRates(base = 'EUR', fecha = 'latest') {
  return fetch(`https://api.exchangeratesapi.io/${fecha}?base=${base}`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => respuesta.rates);
}

function obtenerMoneda() {
  return obtenerRates().then((respuesta) => Object.keys(respuesta).concat('EUR'));
}

function seleccionFecha() {
  const myDate = document.querySelector('#myDate');
  const hoy = (new Date()).toISOString().split('T')[0];
  myDate.setAttribute('max', hoy);
}

function crearOpciones(monedas) {
  monedas.sort().forEach((moneda) => {
    const $moneda = document.createElement('option');
    $moneda.innerText = moneda;
    $moneda.dataset.base = moneda;
    $monedas.appendChild($moneda);
  });
}

function inicio() {
  seleccionFecha();
  obtenerMoneda().then((respuesta) => {
    crearOpciones(respuesta);
  });
}

inicio();

function obtenerBase() {
  const { base } = document.querySelector('#monedas').selectedOptions[0].dataset;
  if (base) {
    return base;
  }
  return undefined;
}

function obtenerFecha() {
  const fecha = document.querySelector('#myDate').value;
  if (fecha) {
    return fecha;
  }
  return undefined;
}

function mostrarMonedaCambio(rates) {
  const $tabla = document.querySelector('#tabla-body');
  $tabla.innerHTML = '';
  Object.keys(rates).sort().forEach((base) => {
    const $row = document.createElement('tr');
    const $base = document.createElement('th');
    $base.innerText = base;
    const $cambio = document.createElement('td');
    $cambio.innerText = rates[base];
    $row.appendChild($base);
    $row.appendChild($cambio);
    $tabla.appendChild($row);
  });
}

function enviarFormulario() {
  obtenerRates(obtenerBase(), obtenerFecha())
    .then((respuesta) => {
      mostrarMonedaCambio(respuesta);
    });
}

$enviar.onclick = enviarFormulario;
