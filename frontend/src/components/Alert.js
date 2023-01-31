import React from 'react';

const Alert = ({alerts}) => {
    return (
        <div>
            {alerts?.map((alert) => 
            (<div key={alert?.id} className={`alert alert-${alert?.alertType}`}>
                {alert?.message}
            </div>))}
        </div>
    );
}

export default Alert;
