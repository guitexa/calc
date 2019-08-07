import { Calcular } from './calcular';

const app = document.querySelector('#app');

// SOMAR
const somar = document.createElement('form');
app.appendChild(somar);

const somaV1 = document.createElement('input');
somaV1.setAttribute('type', 'number');
somaV1.setAttribute('id', 'somaV1');
somaV1.style.width = '50px';
somar.appendChild(somaV1);

const mais = document.createElement('span');
mais.style.margin = '0 8px';
mais.innerHTML = '+';
somar.appendChild(mais);

const somaV2 = document.createElement('input');
somaV2.setAttribute('type', 'number');
somaV2.setAttribute('id', 'somaV2');
somaV2.style.width = '50px';
somar.appendChild(somaV2);

const btSomar = document.createElement('button');
btSomar.setAttribute('type', 'button');
btSomar.setAttribute('id', 'btSomar');
btSomar.style.margin = '0 12px';
btSomar.innerHTML = 'Somar';
somar.appendChild(btSomar);

const respSoma = document.createElement('span');
respSoma.setAttribute('id', 'respSoma');
somar.appendChild(respSoma);


// MULTIPLICAR
const multiplicar = document.createElement('form');
app.appendChild(multiplicar);

const multipV1 = document.createElement('input');
multipV1.setAttribute('type', 'number');
multipV1.setAttribute('id', 'multipV1');
multipV1.style.width = '50px';
multiplicar.appendChild(multipV1);

const vezes = document.createElement('span');
vezes.style.margin = '0 8px';
vezes.innerHTML = '+';
multiplicar.appendChild(vezes);

const multipV2 = document.createElement('input');
multipV2.setAttribute('type', 'number');
multipV2.setAttribute('id', 'multipV2');
multipV2.style.width = '50px';
multiplicar.appendChild(multipV2);

const btMultip = document.createElement('button');
btMultip.setAttribute('type', 'button');
btMultip.setAttribute('id', 'btMultip');
btMultip.style.margin = '0 12px';
btMultip.innerHTML = 'Multiplicar';
multiplicar.appendChild(btMultip);

const respMultip = document.createElement('span');
respMultip.setAttribute('id', 'respMultip');
multiplicar.appendChild(respMultip);


new Calcular();