import React from 'react'
import './button.scss'

interface ButtonProps {
    value: string;
    isFunction?: boolean;
    onClick: (e: any) => void;
}

const Button = (props: ButtonProps) => <div className={props.isFunction && (props.isFunction === true) ? 'button function' : 'button'} onClick={props.onClick}>{props.value}</div>

export default Button