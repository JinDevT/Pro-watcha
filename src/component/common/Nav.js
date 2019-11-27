import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from '../../assets/images/logo.png';


const NavBlock = styled.nav`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 70px;
    padding: 0 50px;
    transition: all .5s ease-in;
    ${props =>
        props.main &&
        css`
            top: 56px;
            &.backColor {
                background-color: #111;
            }
        `}
    
    &:after {
        display: block;
        content: '';
        clear: both;
    }
    
`;

const LeftNav = styled.div`
    float: left;
    background: url(${Logo}) no-repeat;
    width: 180px;
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
        margin-top: 19px;
        line-height: 32px;
        border-radius: 30px;
        text-align: center;
        font-size: 15px;
        background-color: #fff;
    }
`;

const Nav = props => {
    const [scroll, setScroll] = useState(false);

    const MainScroll = () => {
        if(window.scrollY === 0) {
            setScroll(false);
        } else if (window.scrollY > 20) {
            setScroll(true);
        }
    }

    window.addEventListener('scroll', MainScroll);

    return (
        <NavBlock {...props} className={"navigation " + (scroll ? "backColor" : "" )}>
            <LeftNav>
                <Link to='/' className="logo" ></Link>
            </LeftNav>
            
            <RightNav>
                {/* 두번 째 링크에 조건부.
                    1. 시작하기 텍스트
                    2. 로그인 텍스트
                */}
                <NavList>
                    <ListLi>
                        <Link to='/start' className="btn start_btn">시작하기</Link>
                    </ListLi>
                </NavList>
            </RightNav>
        </NavBlock>
    );
}

export default Nav;