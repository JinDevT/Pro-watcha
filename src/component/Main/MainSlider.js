import React from 'react';
import styled from 'styled-components';


import './MainSample.css';
import Slider from './Slider';




const MainSlideBlock = styled.div`
    position: relative;
    padding-top: 50%;
    overflow: hidden;
   
`;



const MainSlider = () => {
    
    return (
        <MainSlideBlock>
            <div className="wrap">
                {/* container 부터 슬라이드. */}
                <div className="container">
                    <Slider/>
                    
                </div>
            </div>
        </MainSlideBlock>
    );
}

export default MainSlider;