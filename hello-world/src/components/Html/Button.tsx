import React, from 'react'
type ButtonProps = {
    variant: 'Primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>
export const Button = ({variant, children, ...rest}: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`}  {...rest}>
            {children}
        </button>
    )
}
