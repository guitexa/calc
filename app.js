const getv1 = document.querySelector('#v1');
const getv2 = document.querySelector('#v2');

const getBt = document.querySelector('#bt');
getBt.addEventListener('click', calcular);

const res = document.querySelector('#res');

function calcular() {
  let v1 = Number(getv1.value);
  let v2 = Number(getv2.value);

  res.innerHTML = v1 + v2;

  getv1.value = '';
  getv2.value = '';
}