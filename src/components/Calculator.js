import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

    render = () => (
      <div className="grid container max-width-sm">
        <result value={0} />
        <button name="AC" type="button">AC</button>
        <button name="+/-" type="button">+/-</button>
        <button name="%" type="button">%</button>
        <button name="/" type="button">/</button>

        <button name="7" type="button">7</button>
        <button name="8" type="button">8</button>
        <button name="9" type="button">9</button>
        <button name="*" type="button">*</button>

        <button name="4" type="button">4</button>
        <button name="5" type="button">5</button>
        <button name="6" type="button">6</button>
        <button name="-" type="button">-</button>

        <button name="1" type="button">1</button>
        <button name="2" type="button">2</button>
        <button name="3" type="button">3</button>
        <button name="+" type="button">+</button>

        <button name="0" type="button" id="zero">0</button>
        <button name="." type="button">.</button>
        <button name="=" type="button">=</button>
      </div>
    );
}

export default Calculator;
