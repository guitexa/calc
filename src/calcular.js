export default class Calcular {
  constructor() {
    this.getRespSoma = document.querySelector('#respSoma');

    this.getSomaV1 = document.querySelector('#somaV1');
    this.getSomaV2 = document.querySelector('#somaV2');

    this.getBtSomar = document.querySelector('#btSomar');
    this.getBtSomar.onclick = event => this.Somar(event);

    this.getRespMultip = document.querySelector('#respMultip');

    this.getMultipV1 = document.querySelector('#multipV1');
    this.getMultipV2 = document.querySelector('#multipV2');

    this.getBtMultip = document.querySelector('#btMultip');
    this.getBtMultip.onclick = event => this.Multiplicar(event);
  }

  Somar(event) {
    event.preventDefault();

    const v1 = Number(this.getSomaV1.value);
    const v2 = Number(this.getSomaV2.value);

    if (v1 <= 0 || v2 <= 0) {
      this.getRespSoma.innerHTML = 'Type something';
    } else {
      this.getRespSoma.innerHTML = v1 + v2;

      this.getSomaV1.value = '';
      this.getSomaV2.value = '';
    }
  }

  Multiplicar(event) {
    event.preventDefault();

    const v1 = Number(this.getMultipV1.value);
    const v2 = Number(this.getMultipV2.value);

    if (v1 <= 0 || v2 <= 0) {
      this.getRespMultip.innerHTML = 'Type something';
    } else {
      this.getRespMultip.innerHTML = v1 * v2;

      this.getMultipV1.value = '';
      this.getMultipV2.value = '';
    }
  }
}
