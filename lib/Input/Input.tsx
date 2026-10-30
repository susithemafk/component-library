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
        value,
        defaultValue,
        onChange,
        ...restProps
    } = props

    const [internalValue, setInternalValue] = useState(defaultValue ?? '')
    const inputValue = value ?? internalValue

    const getClassName = () => {
        const classes: string[] = []
        if (variant) classes.push(`input-${variant}`)
        if (inputSize) classes.push(`input--size-${inputSize}`)
        if (className) classes.push(className)
        if (labelUp) classes.push('input--label-up')
        return classes.join(' ')
    }

    return (
        <div className={`input ${getClassName()}`}>
            <label className="input__label" htmlFor={id}>
                {label}
                <input
                    type="text"
                    id={id}
                    {...restProps}
                    value={inputValue}
                    onChange={(e) => {
                        if (value === undefined) {
                            setInternalValue(e.target.value)
                        }
                        onChange?.(e)
                    }}
                    disabled={disabled}
                    className="input__input"
                    aria-label={id} // dulezity pokud je label prazdny
                    placeholder={placeholder}
                />
            </label>
        </div>
    )
}
