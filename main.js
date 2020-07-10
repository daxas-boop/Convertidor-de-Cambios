const $cambios = document.querySelector('#cambios');
const $enviar = document.querySelector('#enviar');
const $rates = document.querySelector('#rates');

fetch('https://api.exchangeratesapi.io/latest')
  .then((resp) => resp.json())
  .then((resp) => {
    const cambios = Object.keys(resp.rates);
    cambios.forEach((cambio) => {
      const $option = document.createElement('option');
      $option.innerText = (cambio);
      $cambios.appendChild($option);
    });
  })
  .catch((error) => (`FALLO${error}`));

function crearListaDeCambio() {
  fetch('https://api.exchangeratesapi.io/latest')
    .then((resp) => resp.json())
    .then((resp) => {
      const rates = Object.keys(resp.rates);
      rates.forEach((rate) => {
        const $li = document.createElement('li');
        $li.innerText = (`${rate}: 2`);
        $rates.appendChild($li);
      });
    });
}

$enviar.onclick = crearListaDeCambio;

function date() {
  const myDate = document.querySelector('#myDate');
  const today = new Date();
  myDate.value = today.toISOString().substr(0, 10);
}

date();
