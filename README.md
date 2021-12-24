# React_typeScript

TypeScript is known as an Object-oriented programming language whereas JavaScript is a scripting language

## Create project

`npx create-react-app hello-world --template typescript  `

## Typing Props

define type of props

```typescript
type GreetProps = {
    name: String
}
```

### Basic Props

Parent  Component

```typescript
function App() {
  const personName =  {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
     {
       first: 'Bruce',
       last: 'Wayne'
     },
     {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
  ]
  return (
    <div className="App">
      <Greet name="Jeffrey" messageCount={10} isLoggedIn= {false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}
```

#### primitive type Props:

```typescript
type GreetProps = {
    name: String,
    messageCount: number,
    isLoggedIn: boolean
}
// typescript do not happy about unknown type 
export const Greet = (props: GreetProps) => {
    return(
        <div>
            {props.isLoggedIn ? <h2>Welcome {props.name}! you have {props.messageCount} unread messages</h2> : <h2>Welcome</h2>} 
        </div>
    )
}
```

#### Object Props:

```typescript
type PersonProps = {
    name: {
        first: string,
        last:  string
    }
}
// type of object
export const Person = (props: PersonProps) => {
    return (
        <h2>{props.name.first} {props.name.last}</h2>
    )
}
```

#### Array Props:

```typescript
import React from 'react'
type PersonListProps = {
    // define as name: {}[]
    names: {
        first: string,
        last: string,
    }[]
}
export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return <h2 key={name.first}>{name.first} {name.last}</h2>
            })}
        </div>
    )
}
```

### Advantage Props

#### Unit the type options

```typescript
import React from 'react'
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
export const Status = (props: StatusProps) => {
    let message;
    if (props.status === 'loading') {
        message = 'Loading'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully'
    } else {
        message = 'Error fecthing data'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}
```

#### component with Children text

```typescript
<Heading>PlaceHolder</Heading>

import React from 'react'
type HeadingProps = {
    children: string,
}
export const Heading = (props: HeadingProps) => {
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}
```

#### Component with Another Components

```typescript
<Oscar>
  <Heading>Oscar goes to leonardo Dicpario!</Heading>
</Oscar>

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
```

#### With optional props

```typescript
type GreetProps = {
    name: String,
    messageCount?: number,  // add `?` becomes Optional
    isLoggedIn: boolean 
}
// typescript do not happy about unknown type 
export const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props  // if no input, set default messageCount as 0
    return(
        <div>
            {props.isLoggedIn ? <h2>Welcome {props.name}! you have {props.messageCount} unread messages</h2> : <h2>Welcome</h2>} 
        </div>
    )
}
```

### Event Props

#### passing the function of button

```typescript
<Button handleClick= {() => {console.log('Button clicked')}}/>

import React from 'react'
type ButtonProps = {
    handleClick: () => void
}
export const Button = (props: ButtonProps) => {
    return (
        <div>
            <button onClick={props.handleClick}>Click</button>
        </div>
    )
}
```

#### Passing `event` into the function

##### button

```typescript
<Button handleClick= {(event, id) => {console.log('Button clicked', event, id)}}/>



import React from 'react'
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
export const Button = (props: ButtonProps) => {
    return (
        <div>
            <button onClick={(event)=> props.handleClick(event, 1)}>Click</button>
        </div>
    )
}
```

##### Input

```typescript
<Input value="" handleChange={(event) => console.log(event)} />
import React from 'react'
type Inputprops = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: Inputprops) => {
    return (
        <div>
            <input type='text' value={props.value} onChange={props.handleChange}/>
        </div>
    )
}
```

## Style Props

```typescript
 <Container  styles={{border: '1px soild black', padding: '1rem'}}/>
```

```typescript
import React from 'react'
type ContainerProps = {
    styles: React.CSSProperties
}
export const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            Text content gose here:
        </div>
    )
}
```

### Props Types and Tips

```typescript
import React from 'react'
type Inputprops = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({value, handleChange}: Inputprops) => {
    return (
        <div>
            <input type='text' value={value} onChange={handleChange}/>
        </div>
    )
}
```

Create separate file 

```typescript
export type PersonProps = {
    name: {
        first: string,
        last:  string
    }
}
```

```typescript
import { PersonProps } from "./Person.type"
// type of object
export const Person = (props: PersonProps) => {
    return (
        <h2>{props.name.first} {props.name.last}</h2>
    )
}
```

## UseState Hook

How the typescript works on the `useState`

```typescript
import React from 'react'
import {useState} from 'react'
type AuthUser = {
    name: string,
    email: string,
}
export const User = () => {
       // user attribute either accept Authuser or null
    const [user, setUser] = useState< AuthUser | null >(null)
    const handleLogin = () => {
        setUser({
            name: 'Jeffrey',
            email: 'jeffrey@example.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is  {user?.name} </div>
            <div>User email is {user?.email} </div>
        </div>
    )
}
```

### useState type assertion

assume that user never be `null`

```typescript
const [user, setUser] = useState< AuthUser>({} as AuthUser)
```

## useReducer Hook

```typescript
import React from 'react'
import { useReducer } from 'react'
type CountState = {
    count: number,
}
type CounterAction = {
    type: string,
    payload:number
}
const initialState = {count: 0}
function reducer(state : CountState, action: CounterAction) {
    switch(action.type) {
        case 'increase':
            return {count: state.count + action.payload}
        case 'decrease':
            return {count: state.count - action.payload}
        default:
            return state
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increase', payload: 10})}>Increase 10</button>
            <button onClick={() => dispatch({type: 'decrease', payload: 10})}>Decrease 10</button>
        </>
    )
}
```

### UseReducer Strict Action types

```typescript
import React from 'react'
import { useReducer } from 'react'
type CountState = {
    count: number,
}
type UpdateAction = {
    type: 'increase' | 'decrease' | 'reset'
    payload:number
}

type ResetAction = {
    type: 'reset' 
}
// ------------ Strict Action types -------------
type CounterAction = UpdateAction | ResetAction
const initialState = {count: 0}
function reducer(state : CountState, action: CounterAction) {
    switch(action.type) {
        case 'increase':
            return {count: state.count + action.payload}
        case 'decrease':
            return {count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increase', payload: 10})}>Increase 10</button>
            <button onClick={() => dispatch({type: 'decrease', payload: 10})}>Decrease 10</button>
            <button onClick={() => dispatch({type: 'reset'})}>Decrease 10</button>
        </>
    )
}
```

## useContext

Do it in app.jsx

```typescript
import React, { createContext } from "react";
import { theme } from "./ theme";

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({children} : ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
```

work on component

```typescript
import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'
export const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div style = {{background: theme.primary.main, color : theme.primary.text}}>
            Theme context
        </div>
    )
}
```

#### useContext future Value

```typescript
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
```

```typescript
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
```

## useRef Hook

```typescript
import React from 'react'
import { useRef, useEffect } from 'react'
export const DomRef = () => {
    // select the HTMLInputElement type
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect( () => {
        inputRef.current?.focus()
    },[])
    return (
        <div>
            <input type='text' ref={inputRef}/>
        </div>
    )
}
```

Component Props

Logging.tsx

```typescript
export const Login = () => {
    return (
        <div>
            User loggin in 
        </div>
    )
}
```

Profile.tsx

```typescript
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
```

Private.tsx

```typescript
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
```

## Generic Props

passing any type into the Component

```typescript
type ListProps<T> = {
    items: T[],
    onClick: (value: T) => void
}
export const List = <T extends {}>({items,onClick}: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}

```

## Restricting Props

```typescript
import React from 'react'
type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
    
} 
type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
} 
type zero = RandomNumberType & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
} 

type RandomNumberProps = PositiveNumber | NegativeNumber | zero

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
} : RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'} {' '}
            {isZero && 'zero'}
        </div>
    )
}

```

## Template Literals and Exclude

all create all possible position 

```typescript
import React from 'react'
type HorizontalPosition = 'Left' | 'center' | 'right'
type VeriticalPosition = 'top' | 'center' | 'bottom'
type ToastProps = {
    position: 
    // 去除 ‘center-center’
    | Exclude<`${HorizontalPosition}-${VeriticalPosition}`, 'center-center'>
    | 'center'
}
export const Toast = ({position}: ToastProps) => {
    return (
        <div>
            Toast Notification Position - {position}
        </div>
    )
}

```

## Warpping HTML Elements

Custom own type

```typescript
import React, from 'react'
type ButtonProps = {
    variant: 'Primary' | 'secondary'
} & React.ComponentProps<'button'>
export const Button = ({variant, children, ...rest}: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`}  {...rest}>
            {children}
        </button>
    )
}

```

```typescript
import React from 'react'
type InputProps = React.ComponentProps<'input'>

export const Input = (props: InputProps) => {
    return (
        <input {...props} />
    )
}

```

To require the {children}  to be text only

```typescript
import React, from 'react'
type ButtonProps = {
    variant: 'Primary' | 'secondary',
    children: string
   // exclude the children.
} & Omit<React.ComponentProps<'button'>, 'children'>
export const Button = ({variant, children, ...rest}: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`}  {...rest}>
            {children}
        </button>
    )
}
```

## Extracting a Component Prop Types

extract types from one component to another component

```typescript
import React from 'react'
import { Greet } from '../Greet'
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>
            {props.isLoggedIn}
        </div>
    )
}

```

## Polymorphic Components

```typescript
<text as='h1' size='lg'> heading </text>
```

```typescript
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
```
