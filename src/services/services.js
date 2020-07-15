export function obtenerRates(base = 'EUR', fecha = 'latest') {
    return fetch(`https://api.exchangeratesapi.io/${fecha}?base=${base}`)
      .then((respuesta) => respuesta.json())
      .then((respuesta) => respuesta.rates);
  }