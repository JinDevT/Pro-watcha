import React from 'react';
import styled from 'styled-components';

const HeaderBlock =  styled.header`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    align-items: center;
    background: #22b99b;
    width: 100%;
    height: 56px;
    padding: 0 50px;

`;

const HeaderTitle = styled.p`
    flex: 1;
    font-size: 14px;
    line-height: 1.3;
    font-weight: bold;
`;

const UseButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: #000;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-size: 14px;
    padding: 0 15px;
    cursor: pointer;
`;

const Header = () => {
    return(
        <HeaderBlock>
            <HeaderTitle>지금 왓챠플레이 이용권을 구매하고, 모든 영화, 드라마를 무제한으로 감상하세요. </HeaderTitle>
            <div className="btn_box">
                <UseButton>이용권 구매</UseButton>
            </div>
        </HeaderBlock>
    );
    
};

export default Header;