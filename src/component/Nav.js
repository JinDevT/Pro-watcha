import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBlock = styled.nav`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100px;
    padding: 0 50px;
`;

// const LeftNav = styled.div`
//     float: left;
//     width: 345px;
//     height: 100%;
//     .logo {
//     background: url('../../assets/images/logo.png') no-repeat center; 
//     background-size: contain;
//     text-indent: -9999px;
//     }
// `;


const Nav = () => {
    return (
        <NavBlock>
            <Link to='/' className="logo"></Link>
            <div className="right_nav">
                {/* 두번 째 링크에 조건부.
                    1. 시작하기 텍스트
                    2. 로그인 텍스트
                */}
                <ul className="nav_list">
                    <li className="nav_list_li">
                        <Link to='/start' className="btn start_btn">시작하기</Link>
                    </li>
                </ul>
            </div>
        </NavBlock>
    );
}

export default Nav;