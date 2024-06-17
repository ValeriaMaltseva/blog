import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import * as S from './styled';

const RootLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <S.Layout>
            <Header />
            <S.Content>{children}</S.Content>
            <Footer />
        </S.Layout>
    );
};

export default RootLayout;
