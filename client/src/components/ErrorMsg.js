import React from 'react';

const ErrorMsg = ({msg}) => {
    return (
        <div className="error-container">
            <p>{msg}</p>
        </div>
    )
}

export default ErrorMsg
