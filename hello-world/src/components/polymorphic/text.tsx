import React from 'react'

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'seconary'
    children: React.ReactNode
    as?: E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & React.ComponentProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>
export const text = <E extends React.ElementType = 'div'>(props: TextProps<E>) => {
    const Component = props.as || 'div'
    return (
        <Component className={`class-with-${props.size}-${props.color}`}>
            {props.children}
        </Component>
    )
}
