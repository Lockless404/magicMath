import React, { Component } from 'react'
import { Button } from './Button'

export default class Calculator extends Component {
  render() {
    return (
      <>
        <p className='calcDisplay'></p>
        <Button className='buttonAC' text='AC' color='lightgrey' />
        <Button className='button+-' text='+/-' color='lightgrey' />
        <Button className='button%' text='%' color='lightgrey' />
        <Button className='button/' text='÷' color='coral' />
        <Button className='button7' text='7' color='lightgrey' />
        <Button className='button8' text='8' color='lightgrey' />
        <Button className='button9' text='9' color='lightgrey' />
        <Button className='buttonx' text='x' color='coral' />
        <Button className='button4' text='4' color='lightgrey' />
        <Button className='button5' text='5' color='lightgrey' />
        <Button className='button6' text='6' color='lightgrey' />
        <Button className='button-' text='-' color='coral' />
        <Button className='button1' text='1' color='lightgrey' />
        <Button className='button2' text='2' color='lightgrey' />
        <Button className='button3' text='3' color='lightgrey' />
        <Button className='button+' text='+' color='coral' />
        <Button className='button0' text='0' color='lightgrey' />
        <Button className='button.' text='.' color='lightgrey' />
        <Button className='button=' text='=' color='coral' />
      </>
    )
  }
}
