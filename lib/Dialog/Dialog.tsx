import React, { SyntheticEvent } from 'react'
import './Dialog.scss'

export interface DialogProps {
    children: React.ReactNode
    className?: string
    open?: boolean
    overlay?: 'none' | 'medium' | 'dark'
    onClose?: () => void
}

export const Dialog: React.FC<DialogProps> = ({
    children,
    className,
    open = false,
    overlay = 'medium',
    onClose,
    ...restProps
}) => {
    const getClassName = () => {
        const classes = ['dialog']
        if (open) classes.push('open')
            if (overlay) {
                if (overlay === 'none') classes.push('overlay-none')
                if (overlay === 'medium') classes.push('overlay-medium')
                if (overlay === 'dark') classes.push('overlay-dark')
            }
        if (className) classes.push(className)
        return classes.join(' ')
    }

    const handleOutsideClick = (e: SyntheticEvent<HTMLDivElement | HTMLSpanElement>) => {
        if (
            typeof onClose === 'function' &&
            ((e.target as Element).className === 'dialog__overlay' ||
                (e.target as Element).className === 'dialog__close')
        ) {
            // close
            onClose()
        }
    }

    return (
        <div className={getClassName()} {...restProps}>
            <div className="dialog__wrapper">
                <div className="dialog__content">{children}</div>
                <span className="dialog__close" onClick={(e) => handleOutsideClick(e)}>
                    &#10005;
                </span>
            </div>
            <div className="dialog__overlay" onClick={(e) => handleOutsideClick(e)}></div>
        </div>
    )
}
