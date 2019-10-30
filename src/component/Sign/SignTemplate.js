import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../assets/images/start_bg.jpeg';

import Nav from '../common/Nav';


const SignTemplateBlock = styled.div`
    position: relative;
    min-height: 900px;
    background: url(${img}) no-repeat center;
    background-size: cover;
    position: relative;
`;

const SignInner = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    margin: 0 auto;
    padding: 0 135px;
`;


const SignTemplate = ({children}) => {
    return (
        <SignTemplateBlock>
            <Nav/>
            <SignInner>
                {children}
            </SignInner>
        </SignTemplateBlock>
        
    );
}

export default SignTemplate;