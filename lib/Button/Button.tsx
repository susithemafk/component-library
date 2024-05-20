import React from 'react'
import './Button.scss'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    variant?: 'primary' | 'secondary' | 'dark'
    size?: 'small' | 'medium' | 'large'
    rounded?: boolean
    disabled?: boolean
    loading?: boolean
    onClick?: (...args: any[]) => any
}

export const Button = (props: ButtonProps): JSX.Element => {
    /**
     * destructure props
     */
    const {
        children,
        className,
        variant = 'primary',
        size = 'medium',
        rounded = false,
        disabled,
        loading,
        onClick,
    } = props

    /**
     * create a class string from props
     * @returns string
     */
    const getClassName = () => {
        const c = ['btn']
        if (variant) c.push(`btn-${variant}`)
        if (size) c.push(`btn--size-${size}`)
        if (rounded) c.push(`btn--rounded`)
        if (className) c.push(className)
        return c.join(' ')
    }

    return (
        <>
            <button
                className={getClassName()}
                disabled={disabled}
                onClick={!disabled ? onClick : () => console.log('Try harder:D')}>
                {!loading && children}
                {loading && <div className="scl-loader"></div>}
            </button>
        </>
    )
}
