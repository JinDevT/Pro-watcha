import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Nav from '../common/Nav';



const MainBlock = styled.div`
    height: 100%;
    padding: 56px 0 0;
`;

const MainBox =  styled.main`
    background-color: #141517;
`;

const Main =({children}) => {
    return(
        <MainBlock>
            <Header/>
            <Nav main type='main' className="scrolling"/>
            <MainBox>
                {children}
            </MainBox>
        </MainBlock>
    );
}

export default Main;