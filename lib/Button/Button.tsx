import { Button as RadixButton, ButtonProps as RadixButtonProps, Theme } from '@radix-ui/themes'
import './Button.scss'
import { Responsive } from '@radix-ui/themes/props'

export interface ButtonProps extends Omit<RadixButtonProps, 'variant' | 'size' | 'color'> {
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
    console.log(props)

    const {
        variant = 'primary',
        className,
        size = 'medium',
        children,
        rounded,
        disabled,
        loading,
        onClick,
        ...restProps
    } = props

    const getSize = (
        size: 'small' | 'medium' | 'large' | undefined
    ): Responsive<'1' | '2' | '3' | '4'> | undefined => {
        switch (size) {
            case 'small':
                return '1'
            case 'medium':
                return '3'
            case 'large':
                return '4'
            default:
                return '3'
        }
    }

    const getClassName = () => {
        const c = ['btn']
        if (variant) c.push(`btn-${variant}`)
        if (className) c.push(className)
        return c.join(' ')
    }

    console.log(getSize(size), typeof getSize(size))

    return (
        <Theme>
            <RadixButton
                onClick={onClick}
                className={getClassName()}
                size={getSize(size)}
                radius={rounded ? 'medium' : undefined}
                disabled={disabled}
                loading={loading}
                {...restProps}>
                {children}
            </RadixButton>
        </Theme>
    )
}
