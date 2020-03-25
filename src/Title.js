import React from 'react';

import calcIcon from './assets/calc.png';

function Title() {
  return (
    <div id="title">
      <img src={calcIcon} />
      <h1>Calculadora Reativa</h1>
    </div>
  );
}

export default Title;
