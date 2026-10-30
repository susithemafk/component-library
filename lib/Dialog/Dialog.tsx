import React, { useEffect } from 'react'
import './Dialog.scss'
import { createPortal } from 'react-dom'

export interface DialogProps {
    children: React.ReactNode
    className?: string
    open?: boolean
    overlay?: 'none' | 'medium' | 'dark'
    onClose?: () => void
    ariaLabel?: string
}

export const Dialog: React.FC<DialogProps> = ({
    children,
    className,
    open = false,
    overlay = 'medium',
    onClose,
    ariaLabel = 'Dialog',
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

    // escape key close
    useEffect(() => {
        if (!open) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose?.()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [open, onClose])

    const dialog = (
        <div
            className={getClassName()}
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            {...restProps}>
            <div className="dialog__wrapper">
                <div className="dialog__content">{children}</div>
                <button
                    type="button"
                    aria-label="Close dialog"
                    className="dialog__close"
                    onClick={onClose}>
                    &#10005;
                </button>
            </div>
            <div className="dialog__overlay" onClick={onClose}></div>
        </div>
    )

    // don't render if not open
    if (!open) return null
    // render to body (portal)
    return typeof document !== 'undefined' ? createPortal(dialog, document.body) : null
}
