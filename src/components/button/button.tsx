import React from 'react'
import './button.scss'

interface ButtonProps {
    value: string;
    onClick: (e:any) => void;
}

const Button = (props: ButtonProps) => <div className='button' onClick={props.onClick}>{props.value}</div>

export default Button