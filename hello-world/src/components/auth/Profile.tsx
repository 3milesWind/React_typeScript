import React from 'react'
export type ProfilePros = {
    name: string
}
export const Profile = ({name}: ProfilePros) => {
    return (
        <div>
            Private Profile component. Name is {name}
        </div>
    )
}
