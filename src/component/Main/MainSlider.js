import React from 'react';
import styled from 'styled-components';

import './MainSample.css';




const MainSlideBlock = styled.div`
    position: relative;
    padding-top: 50%;
    overflow: hidden;
   
`;

const MainSlider = () => {
    return (
        <MainSlideBlock>
            <div className="wrap">
                <div className="container">
                    <div className="cont">
                        <div className="area_txt">
                            <div className="left_box">
                                <button className="left_btn">이전페이지</button>
                            </div>
                            <div className="center_box">
                                <h2 className="work_tit">멜로가체질</h2>
                                <p className="work_desc">찰진 대화와 신선한 연출, <br/>
                                    모든캐릭터가 매력만점
                                </p>
                            </div>
                            <div className="right_box">
                                <button className="right_btn">다음페이지</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </MainSlideBlock>
    );
}

export default MainSlider;