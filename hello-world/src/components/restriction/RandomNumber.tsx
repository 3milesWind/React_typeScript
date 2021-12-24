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
