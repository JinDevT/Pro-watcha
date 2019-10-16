import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Start.css';


const Start = () => {
    return(
        <div className="wrap start">
            <div className="inner">
                <div className="container">
                    <div className="cont">
                        <div className="inner">
                            <div className="area_text">
                                <Link to="/" className="logo">로고</Link>
                                <br/>
                                <Link to="/" className="page_btn email_join">
                                    <span>이메일로 왓챠에 가입</span>
                                </Link>
                                <br/>
                                <Link to="/" className="page_btn face_join">
                                    <span>Facebook으로 가입</span>
                                </Link>
                                <p className="sub_tit face_info">걱정마세요. 타임라인에 아무것도 올리지 않아요.</p>
                                <div className="line_div"></div>
                                <p className="sub_tit watcha_info">왓챠플레이와 왓챠는같은 계정을 사용해요.</p>
                                <Link to ="/" className="page_btn watcha_login">
                                    <span>왓챠로 로그인</span>
                                </Link>
                                <br/>
                                                           
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default Start;