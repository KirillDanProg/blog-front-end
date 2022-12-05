import React from 'react';



export const Wrapper = ({callback, children, className}) => {
    const callbackHandler = () => {
        callback && callback()
    }
    return (
        <div onClick={callbackHandler}
             className={className}
        >
            {children}
        </div>
    );
};

