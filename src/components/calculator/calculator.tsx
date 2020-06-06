import React, { useState } from 'react'
import Button from './../button/button'
import './calculator.scss'
import { isFunction } from 'util'

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0')

    const handleClick = (e: any) => {
        setDisplayValue(displayValue + e.currentTarget.innerText)
    }

    const generateRandomNumber = async () => {
        const url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'
        let response = await fetch(url);

        if (response.ok) {
            let num = await response.text();
            setDisplayValue(parseInt(num) +'')
        } else {
            console.log("HTTP-Error: " + response.status);
        }
    }

    return (<div className="calc-container">
        <div className="value">{displayValue}</div>
        <div className="row">
            <Button value='sin' onClick={e => handleClick(e)} isFunction/>
            <Button value='cos' onClick={e => handleClick(e)} isFunction/>
            <Button value='tan' onClick={e => handleClick(e)} isFunction/>
            <Button value='/' onClick={e => handleClick(e)} isFunction/>
        </div>
        <div className="row">
            <Button value='7' onClick={e => handleClick(e)} />
            <Button value='8' onClick={e => handleClick(e)} />
            <Button value='9' onClick={e => handleClick(e)} />
            <Button value='X' onClick={e => handleClick(e)} isFunction />
        </div>
        <div className="row">
            <Button value='4' onClick={e => handleClick(e)} />
            <Button value='5' onClick={e => handleClick(e)} />
            <Button value='6' onClick={e => handleClick(e)} />
            <Button value='-' onClick={e => handleClick(e)} isFunction />
        </div>
        <div className="row">
            <Button value='1' onClick={e => handleClick(e)} />
            <Button value='2' onClick={e => handleClick(e)} />
            <Button value='3' onClick={e => handleClick(e)} />
            <Button value='+' onClick={e => handleClick(e)} isFunction/>
        </div>
        <div className="row">
            <Button value='0' onClick={e => handleClick(e)} />
            <Button value='.' onClick={e => handleClick(e)} />
            <Button value='^2' onClick={e => handleClick(e)}/>
            <Button value='=' onClick={e => handleClick(e)} isFunction/>
        </div>
        <div className="row">
            <Button value='RAND' onClick={() => generateRandomNumber()} isFunction/>
            <Button value='C' onClick={() => setDisplayValue('0')} isFunction/>
        </div>
    </div>)
}

export default Calculator