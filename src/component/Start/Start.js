import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../assets/images/start_bg.jpeg';
import LogoImg from '../../assets/images/logo.png';

const StartTemplate = styled.div`
    position: relative;
    background: url(${img}) no-repeat center;
    background-size: cover;
    position: relative;
    .inner {
        height: 100vh;
        width: 100%;
        position: relative;
        margin: 0 auto;
        padding: 0 135px;
    }
    .area_text {
        display: inline-block;
        overflow: hidden;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 100;
    }
    .logo {
        display: inline-block;
        width: 345px;
        height: 125px;
        background: url(${LogoImg}) no-repeat ;
        text-indent: -9999px;
    }
    .page_btn {
        display: inline-block;
        margin: 10px 0;
        width: 290px;
        height: 52px;
        line-height: 52px;
        border-radius: 30px;
        color: #fff;
    }
    .page_btn.sign_up {
        background-color: rgba(0,0,0,0.4);
        border: 1px solid rgba(255,255,255,0.3);
        &:hover {
            background-color: #fff;
            color: #000;
        }
    }
    .page_btn.face_join {
        background-color: #4065b3;
    }
    .sub_tit {
        margin: 10px 0;
        line-height: 1.3;
        color: #BDBDBD;
    }

    .sub_tit.face_info {
        font-size: 13px;
    }
    .line_div {
        width: 260px;
        height: 1px;
        background-color: rgba(154,151,161,0.3);
        margin: 0 auto 20px;
    }
    .sub_tit.watcha_info {
        font-size: 15px;
    }
    .page_btn.sign_in {
        background: #ff3376;
    }
    
`;

const Start = () => {
    return(
        <StartTemplate>
            <div className="inner">
                <div className="area_text">
                    <Link to="/" className="logo">로고</Link>
                    <br/>
                    <Link to="/Sign_up" className="page_btn sign_up">
                        <span>이메일로 왓챠에 가입</span>
                    </Link>
                    <br/>
                    <Link to="/" className="page_btn face_join">
                        <span>Facebook으로 가입</span>
                    </Link>
                    <p className="sub_tit face_info">걱정마세요. 타임라인에 아무것도 올리지 않아요.</p>
                    <div className="line_div"></div>
                    <p className="sub_tit watcha_info">왓챠플레이와 왓챠는 같은 계정을 사용해요.</p>
                    <Link to ="/Sign_in" className="page_btn sign_in">
                        <span>왓챠로 로그인</span>
                    </Link>
                    <br/>
                </div>
            </div>
        </StartTemplate>            
    );
}

export default Start;