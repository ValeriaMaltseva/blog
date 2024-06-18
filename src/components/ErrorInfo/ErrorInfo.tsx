import React from 'react';

type ErrorInfoProps = {
    message: string;
};

const ErrorInfo = ({ message }: ErrorInfoProps) => {
    return <div>Error: {message}</div>;
};

export default ErrorInfo;
