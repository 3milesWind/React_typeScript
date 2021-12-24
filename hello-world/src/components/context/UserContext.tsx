import { useState, createContext } from "react"

export type AuthUser = {
    name: string,
    email: string
}
type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type userContextProviderProps = {
    children: React.ReactChild
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({children} : userContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null >(null)
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}