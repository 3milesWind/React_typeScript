import React from 'react'
type OscarProps = {
    children: React.ReactNode
}
export const Oscar = (props: OscarProps) => {
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}
