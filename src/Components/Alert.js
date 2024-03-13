import React from 'react';

function Alert(props){
    return (
            props.obj && <div className={`alert alert-${props.obj.type} alert-dismissible fade show`} role="alert">
            {props.obj.message}
            </div>
    )
}

export default Alert;