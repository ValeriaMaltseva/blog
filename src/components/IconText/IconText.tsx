import React from 'react';
import { Space } from 'antd';

type IconTextProps = {
    icon: React.FC;
    text: string;
};

const IconText = ({ icon, text }: IconTextProps) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default IconText;
