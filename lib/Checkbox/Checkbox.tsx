import React from 'react'
import './Checkbox.scss'

export interface CheckboxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: React.ReactNode | string
    variant?: 'primary' | 'secondary' | 'dark'
    checked?: boolean
    cbSize?: 'small' | 'medium' | 'large'
    reversed?: boolean
    disabled?: boolean
    className?: string
    onChange(value: boolean): void
}

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps): React.JSX.Element => {
    const {
        label,
        variant = 'primary',
        checked = false,
        cbSize = 'medium',
        reversed = false,
        disabled,
        className,
        onChange,
        ...restProps
    } = props

    const getClassName = () => {
        const classes: string[] = []
        if (variant) classes.push(`checkbox-${variant}`)
        if (cbSize) classes.push(`checkbox--size-${cbSize}`)
        if (reversed) classes.push('checkbox--reversed')
        if (className) classes.push(className)
        return classes.join(' ')
    }

    return (
        <label className={`checkbox ${getClassName()}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={!disabled ? (e) => onChange(e.target.checked) : () => console.log('Try harder :D')}
                disabled={disabled}
                className="checkbox__input"
                {...restProps}
            />
            {label && <span className="checkbox__label">{label}</span>}
        </label>
    )
}
