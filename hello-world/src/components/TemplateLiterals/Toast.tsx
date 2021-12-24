import React from 'react'
type HorizontalPosition = 'Left' | 'center' | 'right'
type VeriticalPosition = 'top' | 'center' | 'bottom'
type ToastProps = {
    position: 
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
