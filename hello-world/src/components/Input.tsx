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
