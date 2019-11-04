import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Nav from '../common/Nav';

import '../Main/MainSample.css';

const MainBlock = styled.div`
    height: 100%;
    padding: 56px 0 0;
`;

const MainBox =  styled.main`
    background-color: #000;
`;

const Main =({children}) => {
    return(
        <MainBlock>
            <Header/>
            <Nav main type='main' />
            <MainBox>
                {children}
            </MainBox>
            
        </MainBlock>
    );
}

export default Main;