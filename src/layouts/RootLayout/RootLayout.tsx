import React from 'react';
import { Layout } from 'antd';

import * as S from './styled';

const { Header, Footer, Content } = Layout;

const RootLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <S.Layout>
            <Header>Header</Header>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </S.Layout>
    );
};

export default RootLayout;
