import React, { Component } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const clicked = (btn) => {
      const value = btn.target.innerText;
      const { total, next, operation } = calculate(this.state, value);
      this.setState({ total, next, operation });
    };

    const { total, next, operation } = this.state;

    const display = () => {
      if (next) {
        return next;
      }
      if (operation) {
        return operation;
      }
      if (total) {
        return total;
      }
      return 0;
    };

    return (
      <>
        <input className="calcDisplay" placeholder="0" type="text" maxLength="0" value={display()} onChange={() => ''} />
        <Button onClick={clicked} className="button AC" text="AC" color="lightgrey" />
        <Button onClick={clicked} className="button +-" text="+/-" color="lightgrey" />
        <Button onClick={clicked} className="button %" text="%" color="lightgrey" />
        <Button onClick={clicked} className="button /" text="÷" color="coral" />
        <Button onClick={clicked} className="button 7" text="7" color="lightgrey" />
        <Button onClick={clicked} className="button 8" text="8" color="lightgrey" />
        <Button onClick={clicked} className="button 9" text="9" color="lightgrey" />
        <Button onClick={clicked} className="button x" text="x" color="coral" />
        <Button onClick={clicked} className="button 4" text="4" color="lightgrey" />
        <Button onClick={clicked} className="button 5" text="5" color="lightgrey" />
        <Button onClick={clicked} className="button 6" text="6" color="lightgrey" />
        <Button onClick={clicked} className="button -" text="-" color="coral" />
        <Button onClick={clicked} className="button 1" text="1" color="lightgrey" />
        <Button onClick={clicked} className="button 2" text="2" color="lightgrey" />
        <Button onClick={clicked} className="button 3" text="3" color="lightgrey" />
        <Button onClick={clicked} className="button +" text="+" color="coral" />
        <Button onClick={clicked} className="button O" text="0" color="lightgrey" />
        <Button onClick={clicked} className="button ." text="." color="lightgrey" />
        <Button onClick={clicked} className="button =" text="=" color="coral" />
      </>
    );
  }
}
