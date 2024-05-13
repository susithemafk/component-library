import React, { useState } from 'react'
import './Input.scss'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode | string
    placeholder?: string
    inputSize?: 'small' | 'medium' | 'large'
    disabled?: boolean
    className?: string
}

export const Input = (props: InputProps): JSX.Element => {
    const { label, placeholder, inputSize = 'medium', disabled, className, ...restProps } = props

    const [value, setValue] = useState('')

    const getClassName = () => {
        const classes: string[] = []
        if (inputSize) classes.push(`input-size-${inputSize}`)
        if (className) classes.push(className)
        return classes.join(' ')
    }

    return (
        <div className={`input-wrapper ${getClassName()}`}>
            {label && <label className="input-label">{label}</label>}
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={disabled}
                className="input-field"
                {...restProps}
            />
        </div>
    )
}
