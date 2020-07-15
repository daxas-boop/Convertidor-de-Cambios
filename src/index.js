import{
  obtenerRates
} from './services/services.js'

import{
  crearOpciones,
  mostrarMonedaCambio,
  mostrarCargando
} from './ui/ui.js'


function obtenerMoneda() {
  return obtenerRates().then((respuesta) => Object.keys(respuesta).concat('EUR'));
}

function seleccionFecha() {
  const myDate = document.querySelector('#myDate');
  const hoy = (new Date()).toISOString().split('T')[0];
  myDate.setAttribute('max', hoy);
}

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

function enviarFormulario() {
  mostrarCargando();
  obtenerRates(obtenerBase(), obtenerFecha())
    .then((respuesta) => {
      mostrarMonedaCambio(respuesta);
    });
}

function inicio() {
  const $enviar = document.querySelector('#enviar');
  $enviar.onclick = enviarFormulario;
  seleccionFecha();
  obtenerMoneda().then((respuesta) => {
    crearOpciones(respuesta);
  });
}

inicio();
