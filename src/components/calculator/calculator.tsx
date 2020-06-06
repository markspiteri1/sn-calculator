import React from 'react'
import Button from './../button/button'
import './calculator.scss'

const Calculator = () => {
    return (<div className="calc-container">
        <div className="row">
            <Button value='sin'/>
            <Button value='cos'/>
            <Button value='tan'/>
            <Button value='/'/>
        </div>
        <div className="row">
            <Button value='7'/>
            <Button value='8'/>
            <Button value='9'/>
            <Button value='X'/>
        </div>
        <div className="row">
            <Button value='4'/>
            <Button value='5'/>
            <Button value='6'/>
            <Button value='-'/>
        </div>
        <div className="row">
            <Button value='1'/>
            <Button value='2'/>
            <Button value='3'/>
            <Button value='+'/>
        </div>
        <div className="row">
            <Button value='0'/>
            <Button value='.'/>
            <Button value='^2'/>
            <Button value='='/>
        </div>
    </div>)
}

export default Calculator