import React from 'react'
import './Switch.scss'

export interface SwitchProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'size'> {
    onChange?: (value: boolean, event: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    variant?: 'primary' | 'secondary' | 'dark'
    size?: 'small' | 'medium' | 'large'
    circle?: boolean
    id: string
    disabled?: boolean
    defaultChecked?: boolean
}

export const Switch = (props: SwitchProps): JSX.Element => {
    const {
        className,
        variant = 'primary',
        size = 'medium',
        circle = true,
        disabled,
        id,
        defaultChecked,
        onChange,
    } = props

    const getClassName = () => {
        const c = ['switch']
        if (variant) c.push(`switch-${variant}`)
        if (size) c.push(`switch--size-${size}`)
        circle ? c.push(`switch--shape-circle`) : c.push(`switch--shape-rectangle`)
        if (className) c.push(className)
        return c.join(' ')
    }

    return (
        <label className={getClassName()} htmlFor={id}>
            <input
                id={id}
                className="switch__input"
                type="checkbox"
                disabled={disabled}
                defaultChecked={defaultChecked}
                onChange={onChange ? (e) => onChange(e.target.checked, e) : undefined}
            />
            <span className="switch__slider" />
        </label>
    )
}
