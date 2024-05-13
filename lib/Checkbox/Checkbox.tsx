import React, { useState } from 'react'
import './Checkbox.scss'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode
    variant?: 'primary' | 'secondary' | 'dark'
    checked?: boolean
    cbSize?: 'small' | 'medium' | 'large'
    reversed?: boolean
    className?: string
}

export const Checkbox = (props: CheckboxProps): JSX.Element => {
    const {
        label,
        variant = 'primary',
        checked = false,
        cbSize = 'medium',
        reversed = false,
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
                className="checkbox__input"
                {...restProps}
            />
            <span className="checkbox__label">{label}</span>
        </label>
    )
}
