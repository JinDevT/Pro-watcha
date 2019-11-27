import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import img from '../../assets/images/start_bg.jpeg';
import logoImg from '../../assets/images/logo.png';

const StartTemplate = styled.div`
    position: relative;
    background: url('https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1564363966/crosgmb6yawejwkff87a.jpg') no-repeat center;
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
        background: url(${logoImg}) no-repeat ;
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
        color: #e9ecef;
    }

    .sub_tit.face_info {
        font-size: 15px;
    }
    .line_div {
        width: 260px;
        height: 1px;
        background-color: rgba(154,151,161,0.3);
        margin: 0 auto 20px;
    }
    .sub_tit.watcha_info {
        font-size: 17px;
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
                    {/* <Link to="/Sign_up" className="page_btn sign_up">
                        <span>왓챠에 가입</span>
                    </Link> */}
                    <br/>
                    <Link to="/" className="page_btn face_join">
                        <span>Facebook으로 가입</span>
                    </Link>
                    <p className="sub_tit face_info">걱정마세요. 타임라인에 아무것도 올리지 않아요.</p>
                    <div className="line_div"></div>
                    <p className="sub_tit watcha_info">무료체험을 시작해보세요.</p>
                    <Link to ="/main" className="page_btn sign_in">
                        <span>무료체험 시작</span>
                    </Link>
                    <br/>
                </div>
            </div>
        </StartTemplate>            
    );
}

export default Start;