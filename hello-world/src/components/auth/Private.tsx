import React from 'react'
import {Login} from './Login'
import {ProfilePros} from './Profile'
type PrivateProps = {
    isLoggedIn: boolean,
    Component: React.ComponentType<ProfilePros>
}
export const Private = ({isLoggedIn, Component} : PrivateProps) => {
    if (isLoggedIn) {
        // if the component has pros, then we need to define the ProfileProsd
        return <Component name='Jeffrey'/>
    } else {
        return <Login />
    }
}
