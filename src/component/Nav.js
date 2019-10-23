import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <Link to='/' className="logo">로고</Link>
            <div className="right_nav">
            {/* 두번 째 링크에 조건부.
                1. 시작하기 텍스트
                2. 로그인 텍스트
            */}
            <Link to='/start' className="btn start_btn">시작하기</Link>
            </div>
        </nav>
    );
}

export default Nav;