// Ketchup not included approach this spaghetti with caution
function convert(e) {
  e.preventDefault();
  const form = e.target;
  let celsius;
  let fahrenheit;

  const mode = form.elements['mode'].value;
  const temp = form.elements['input-temp'].value;
  const output = form.elements['output-temp'];
  const precision = form.elements['decimalRange'].value;

  if (temp === '') {
    if (form.lastElementChild.id === 'extra') {
      form.lastElementChild.remove();
    }
    const div = document.createElement('div');
    const text = document.createTextNode('Lämpötila kenttä ei saa olla tyhjä');
    div.id = 'extra';
    div.className = 'single';
    div.appendChild(text);
    form.appendChild(div);
  } else {
    if (mode === 'C') {
      fahrenheit = (temp * 9) / 5 + 32;
      celsius = temp;
      output.value = fahrenheit.toFixed(precision);
    } else {
      celsius = ((temp - 32) * 5) / 9;
      fahrenheit = temp;
      output.value = celsius.toFixed(precision);
    }
    displayKelvin(celsius, precision);
  }
}

function displayKelvin(celsius, precision) {
  const form = document.querySelector('form');
  const div = document.createElement('div');
  const p = document.createElement('p');

  const kelvin = (Number(celsius) + 273.15).toFixed(precision);
  const k = document.createTextNode(kelvin + ' K');
  div.className = 'single';
  div.id = 'extra';
  p.appendChild(k);
  div.appendChild(p);

  if (form.lastElementChild.id === 'extra') {
    form.lastElementChild.remove();
  }

  if (kelvin < 0) {
    const lessThanAbsoluteZero = document.createTextNode('Pienempi kuin absoluuttinen nollapiste');
    div.appendChild(lessThanAbsoluteZero);
  }

  form.appendChild(div);
}

document.addEventListener('submit', convert);

document.getElementById('decimalRange').addEventListener('input', (e) => {
  const rangeOut = document.getElementById('displayRange');
  rangeOut.innerHTML = e.target.value;
});

document.getElementById('mode').addEventListener('input', (e) => {
  const symbols = document.querySelectorAll('.symbol');
  if (e.target.value === 'C') {
    symbols[0].innerHTML = '&deg;C';
    symbols[1].innerHTML = '&deg;F';
  } else {
    symbols[0].innerHTML = '&deg;F';
    symbols[1].innerHTML = '&deg;C';
  }
});
