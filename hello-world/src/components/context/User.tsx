import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'
export const user = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'Vishwas',
                email: 'vishwash@exmaple.com'
            })
        }
    }
    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout} >Login</button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>
        </div>
    )
}
