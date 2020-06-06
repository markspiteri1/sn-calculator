import React, { useState } from 'react'
import Button from './../button/button'
import './calculator.scss'

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0')

    const handleClick = (e: any) => { debugger;alert(e.currentTarget.innerText) }

    return (<div className="calc-container">
        <div className="value">{displayValue}</div>
        <div className="row">
            <Button value='sin' onClick={e => handleClick(e)} />
            <Button value='cos' onClick={e => handleClick(e)} />
            <Button value='tan' onClick={e => handleClick(e)} />
            <Button value='/' onClick={e => handleClick(e)} />
        </div>
        <div className="row">
            <Button value='7' onClick={e => handleClick(e)} />
            <Button value='8' onClick={e => handleClick(e)} />
            <Button value='9' onClick={e => handleClick(e)} />
            <Button value='X' onClick={e => handleClick(e)} />
        </div>
        <div className="row">
            <Button value='4' onClick={e => handleClick(e)} />
            <Button value='5' onClick={e => handleClick(e)} />
            <Button value='6' onClick={e => handleClick(e)} />
            <Button value='-' onClick={e => handleClick(e)} />
        </div>
        <div className="row">
            <Button value='1' onClick={e => handleClick(e)} />
            <Button value='2' onClick={e => handleClick(e)} />
            <Button value='3' onClick={e => handleClick(e)} />
            <Button value='+' onClick={e => handleClick(e)} />
        </div>
        <div className="row">
            <Button value='0' onClick={e => handleClick(e)} />
            <Button value='.' onClick={e => handleClick(e)} />
            <Button value='^2' onClick={e => handleClick(e)} />
            <Button value='=' onClick={e => handleClick(e)} />
        </div>
    </div>)
}

export default Calculator