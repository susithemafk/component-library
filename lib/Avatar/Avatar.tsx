import React from 'react'
import './Avatar.scss'

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
    src: string
    alt: string
    size?: 'small' | 'medium' | 'large'
    className?: string
    shape?: 'circle' | 'square'
    shadow?: boolean
    border?: boolean
}

export const Avatar = ({
    src,
    alt,
    size = 'medium',
    className,
    shape = 'circle',
    shadow = false,
    border = false,
    ...restProps
}: AvatarProps): JSX.Element => {
    const getSizeClassName = () => {
        switch (size) {
            case 'small':
                return 'avatar-size-small'
            case 'large':
                return 'avatar-size-large'
            default:
                return 'avatar-size-medium'
        }
    }

    const classNames = [
        'avatar',
        getSizeClassName(),
        shape === 'circle' ? 'avatar-shape-circle' : 'avatar-shape-square',
        className,
        shadow ? 'avatar-shadow' : '',
        border ? 'avatar-border' : '',
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <span className={classNames} {...restProps}>
            <img src={src} alt={alt} />
        </span>
    )
}
