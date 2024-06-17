import styled from 'styled-components';

import { Layout as AntLayout } from 'antd';

const { Content: AntContent } = AntLayout;

export const Layout = styled(AntLayout)`
    height: 100vh;
`;

export const Content = styled(AntContent)`
    padding: 24px 30px;
    overflow-y: scroll;
`;
