function convert(e) {
  e.preventDefault();
  const form = e.target;

  const mode = form.elements['mode'].value;
  const temp = form.elements['input-temp'].value;
  const output = form.elements['output-temp'];
  const precision = form.elements['decimalRange'].value;

  let result;

  if (mode === 'C') {
    result = (temp * 9) / 5 + 32;
  } else {
    result = ((temp - 32) * 5) / 9;
  }
  output.value = result.toFixed(precision);
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
