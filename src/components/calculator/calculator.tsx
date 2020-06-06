import React, { useState } from 'react'
import Button from './../button/button'
import './calculator.scss'

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('')
    const [functionOpen, setFunctionOpen] = useState(false)

    const handleClick = (e: any) => {
        if (displayValue === 'Invalid exp.') {
            return
        }
        setDisplayValue(displayValue + e.currentTarget.innerText)
        switch (e.currentTarget.innerText) {
            case 'sin':
            case 'cos':
            case 'tan':
            case 'x^2':
                if (functionOpen) {
                    setDisplayValue(displayValue + ')' + e.currentTarget.innerText)
                }
                setDisplayValue(displayValue + e.currentTarget.innerText + '(')
                setFunctionOpen(true)
                break
            case '+':
            case '-':
            case 'X':
            case '/':
                if (functionOpen) {
                    setDisplayValue(displayValue + ')' + e.currentTarget.innerText)
                    setFunctionOpen(false)
                }
                else {
                    if (displayValue[displayValue.length - 1] === '+' ||
                        displayValue[displayValue.length - 1] === '-' ||
                        displayValue[displayValue.length - 1] === 'X' ||
                        displayValue[displayValue.length - 1] === '/') {
                        setDisplayValue(displayValue.substring(0, displayValue.length - 1) + e.currentTarget.innerText)
                    }
                }
                break
        }
    }

    const evaluateExpression = () => {
        try {
            let expression = displayValue
            if (functionOpen) {
                expression += ')'
                setFunctionOpen(false)
            }
            expression = expression.replace(/sin/g, 'Math.sin')
            expression = expression.replace(/cos/g, 'Math.cos')
            expression = expression.replace(/tan/g, 'Math.tan')
            expression = expression.replace(/X/g, '*')
            let answer = eval(expression);
            setDisplayValue(answer)
        } catch (e) {
            if (e instanceof SyntaxError) {
                setDisplayValue('Invalid exp.')
            }
        }
    }

    const generateRandomNumber = async () => {
        const url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'
        let response = await fetch(url);

        if (response.ok) {
            let num = await response.text();
            setDisplayValue(parseInt(num) + '')
        } else {
            console.log("HTTP-Error: " + response.status);
        }
    }

    return (<div className="calc-container">
        <div className="value">{displayValue}</div>
        <div className="row">
            <Button value='sin' onClick={e => handleClick(e)} isFunction />
            <Button value='cos' onClick={e => handleClick(e)} isFunction />
            <Button value='tan' onClick={e => handleClick(e)} isFunction />
            <Button value='/' onClick={e => handleClick(e)} isFunction />
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
            <Button value='+' onClick={e => handleClick(e)} isFunction />
        </div>
        <div className="row">
            <Button value='0' onClick={e => handleClick(e)} />
            <Button value='.' onClick={e => handleClick(e)} />
            <Button value='x^2' onClick={e => handleClick(e)} />
            <Button value='=' onClick={e => evaluateExpression()} isFunction />
        </div>
        <div className="row">
            <Button value='RAND' onClick={() => generateRandomNumber()} isFunction />
            <Button value='C' onClick={() => setDisplayValue('')} isFunction />
        </div>
    </div>)
}

export default Calculator