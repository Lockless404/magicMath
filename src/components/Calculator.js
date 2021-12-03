import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <>
        <p className="calcDisplay">0</p>
        <button className="button AC">AC</button>
        <button className="button +/-">+/-</button>
        <button className="button %">%</button>
        <button className="button ÷" style={ {backgroundColor: 'coral'} }>÷</button>
        <button className="button seven">7</button>
        <button className="button eight">8</button>
        <button className="button nine">9</button>
        <button className="button x" style={ {backgroundColor: 'coral'} }>x</button>
        <button className="button four">4</button>
        <button className="button five">5</button>
        <button className="button six">6</button>
        <button className="button -" style={ {backgroundColor: 'coral'} }>-</button>
        <button className="button one">1</button>
        <button className="button two">2</button>
        <button className="button three">3</button>
        <button className="button +" style={ {backgroundColor: 'coral'} }>+</button>
        <button className="button O">0</button>
        <button className="button .">.</button>
        <button className="button =" style={ {backgroundColor: 'coral'} }>=</button>
      </>
    );
  }
}
