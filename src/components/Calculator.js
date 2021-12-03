import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p className="calcDisplay">0</p>
        <button type="button" className="button AC">AC</button>
        <button type="button" className="button +/-">+/-</button>
        <button type="button" className="button %">%</button>
        <button type="button" className="button ÷" style={{ backgroundColor: 'coral' }}>÷</button>
        <button type="button" className="button seven">7</button>
        <button type="button" className="button eight">8</button>
        <button type="button" className="button nine">9</button>
        <button type="button" className="button x" style={{ backgroundColor: 'coral' }}>x</button>
        <button type="button" className="button four">4</button>
        <button type="button" className="button five">5</button>
        <button type="button" className="button six">6</button>
        <button type="button" className="button -" style={{ backgroundColor: 'coral' }}>-</button>
        <button type="button" className="button one">1</button>
        <button type="button" className="button two">2</button>
        <button type="button" className="button three">3</button>
        <button type="button" className="button +" style={{ backgroundColor: 'coral' }}>+</button>
        <button type="button" className="button O">0</button>
        <button type="button" className="button .">.</button>
        <button type="button" className="button =" style={{ backgroundColor: 'coral' }}>=</button>
      </>
    );
  }
}
