import React from 'react'
import './button.scss'

interface ButtonProps {
    value: string
}

const Button = (props: ButtonProps) => <div className='button'>{props.value}</div>

export default Button