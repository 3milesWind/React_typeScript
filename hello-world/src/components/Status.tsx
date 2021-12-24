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
