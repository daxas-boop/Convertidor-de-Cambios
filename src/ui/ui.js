export function crearOpciones(monedas) {
    const $monedas = document.querySelector('#monedas');
    monedas.sort().forEach((moneda) => {
      const $moneda = document.createElement('option');
      $moneda.innerText = moneda;
      $moneda.dataset.base = moneda;
      $monedas.appendChild($moneda);
    });
  }

export function mostrarMonedaCambio(rates) {
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
  
export function mostrarCargando() {
    document.querySelector('#tabla-body').innerHTML = 'Cargando..';
}