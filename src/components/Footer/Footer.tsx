import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
    return (
        <AntFooter>
            <Text italic>© {new Date().getFullYear()} Valeriia Maltseva. All rights reserved.</Text>
        </AntFooter>
    );
};

export default Footer;
