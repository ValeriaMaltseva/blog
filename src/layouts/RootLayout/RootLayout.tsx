import React from 'react';

const RootLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div>
            <div>Header</div>
            <div>{children}</div>
            <div>Footer</div>
        </div>
    );
};

export default RootLayout;
