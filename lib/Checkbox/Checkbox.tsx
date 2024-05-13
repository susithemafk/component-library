import React, { useState } from 'react'
import './Checkbox.scss'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode | string
    variant?: 'primary' | 'secondary' | 'dark'
    checked?: boolean
    cbSize?: 'small' | 'medium' | 'large'
    reversed?: boolean
    disabled?: boolean
    className?: string
}

export const Checkbox = (props: CheckboxProps): JSX.Element => {
    const {
        label,
        variant = 'primary',
        checked = false,
        cbSize = 'medium',
        reversed = false,
        disabled,
        className,
        ...restProps
    } = props
    const [isChecked, setIsChecked] = useState(checked)

    const getClassName = () => {
        const classes: string[] = []
        if (variant) classes.push(`checkbox-${variant}`)
        if (cbSize) classes.push(`checkbox-size-${cbSize}`)
        if (reversed) classes.push('checkbox-reversed')
        if (className) classes.push(className)
        return classes.join(' ')
    }

    return (
        <label className={`checkbox ${getClassName()}`}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                defaultChecked={checked}
                disabled={disabled}
                className="checkbox__input"
                {...restProps}
            />
            {label && <span className="checkbox__label">{label}</span>}
        </label>
    )
}