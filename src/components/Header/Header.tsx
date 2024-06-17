import React from 'react';

import { toMainPage } from 'helpers/navigation';

import * as S from './styled';

const Header = () => {
    return (
        <S.Header>
            <S.Logo href={toMainPage()} aria-label="Home">
                <S.HomeOutlined />
            </S.Logo>
        </S.Header>
    );
};

export default Header;
