import React, { useState } from 'react'
import './Input.scss'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode | string
    placeholder?: string
    inputSize?: 'small' | 'medium' | 'large'
    variant?: 'primary' | 'secondary' | 'dark'
    disabled?: boolean
    className?: string
    id: string
    labelUp?: boolean
}

export const Input = (props: InputProps): JSX.Element => {
    const {
        label,
        placeholder,
        inputSize = 'medium',
        disabled,
        variant = 'primary',
        className,
        id,
        labelUp = false,
        ...restProps
    } = props

    const [value, setValue] = useState('')

    const getClassName = () => {
        const classes: string[] = []
        if (inputSize) classes.push(`input-size-${inputSize}`)
        if (variant) classes.push(`input-${variant}`)
        if (className) classes.push(className)
        if (labelUp) classes.push('input--label-up')
        return classes.join(' ')
    }

    return (
        <div className={`input ${getClassName()}`}>
            {label && (
                <label className="input__label" htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                type="text"
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={disabled}
                className="input__input"
                placeholder={placeholder}
                {...restProps}
            />
        </div>
    )
}
