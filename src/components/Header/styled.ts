import styled from 'styled-components';
import { HomeOutlined as AntHomeOutlined } from '@ant-design/icons';

import { Layout as AntLayout } from 'antd';

const { Header: AntHeader } = AntLayout;

export const Header = styled(AntHeader)`
    display: flex;
    align-items: center;
    padding: 10px 30px;
`;

export const Logo = styled.a`
    display: flex;
    width: 25px;
    height: 25px;
`;

export const HomeOutlined = styled(AntHomeOutlined)`
    font-size: 25px;
    color: #fff;
`;
