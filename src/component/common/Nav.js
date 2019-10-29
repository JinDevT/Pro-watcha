import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavBlock = styled.nav`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100px;
    padding: 0 50px;
    &:after {
        display: block;
        content: '';
        clear: both;
    }
    
`;

const LeftNav = styled.div`
    float: left;
    background: url(${props => props.logoImg}) no-repeat center ;
    width: 345px;
    height: 100%;
    background-size: contain;
    text-indent: -9999px;
    .logo {
        display: block;
        width: 100%;
        height: 100%;
    }
    
`;

const RightNav = styled.div`
    float: right;

`;

const NavList = styled.ul`
    position: relative;
`;

const ListLi =  styled.li`
    display: inline-block;
    padding: 0 20px;
    .btn {
        display: inline-block;
        height: 32px;
        padding: 0 15px;
        margin-top: 35px;
        line-height: 32px;
        border-radius: 30px;
        text-align: center;
        font-size: 15px;
        background-color: #fff;
    }
`;




const Nav = () => {
    return (
        <NavBlock>
            <LeftNav logoImg="../assets/images/logo.png">
                <Link to='/' className="logo" ></Link>
            </LeftNav>
            
            <RightNav>
                {/* 두번 째 링크에 조건부.
                    1. 시작하기 텍스트
                    2. 로그인 텍스트
                */}
                <NavList>
                    <ListLi >
                        <Link to='/start' className="btn start_btn">시작하기</Link>
                    </ListLi>
                </NavList>
            </RightNav>
        </NavBlock>
    );
}

export default Nav;