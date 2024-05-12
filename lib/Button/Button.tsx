import React from "react"
import "./Button.scss"

interface ButtonProps {
    children: React.ReactNode // Use React.ReactNode instead of ReactNode
}

export const Button = ({ children }: ButtonProps): JSX.Element => {
    // Specify JSX.Element as the return type
    return <button className = "button test">{children}</button>
}