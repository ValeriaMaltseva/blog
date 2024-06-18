import React from 'react';
import { Layout, Typography } from 'antd';

const Footer = () => {
    return (
        <Layout.Footer>
            <Typography.Text italic>
                © {new Date().getFullYear()} Valeriia Maltseva. All rights reserved.
            </Typography.Text>
        </Layout.Footer>
    );
};

export default Footer;
