import React from 'react';
import styled, { css } from 'styled-components';

const FooterBlock =  styled.footer`
    position: absolute;
    top: 98%;
    right: 0;
    left: 0;
    width: 100%;
    text-align: center;
    ${props =>
        props.start &&
        css`
            top: 93%;
        `}
    span {
        color: #fff;
        font-size: 18px;
    }

`;

const Footer = props => {
    return(
        <FooterBlock {...props}>
            <span>@github.com/Kjintae/Pro-watcha</span>
        </FooterBlock>
    );

}

export default Footer;