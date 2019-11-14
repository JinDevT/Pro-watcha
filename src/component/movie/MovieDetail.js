import React from 'react';
import styled from 'styled-components';


const MovieDetailBlock = styled.div`
    position: relative;
    background: #0B0C0D;
    height: 0;
    padding-left: 4%;
    border-top: 1px solid #191a1c;
    border-bottom: 1px solid #191a1c;
    opacity: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    &.show {
        height: 25vw;
        opacity: 1;
    }
    .movie_detail {
        position: relative;
        height: 100%;
        width: 100%;
        color: #fff;
        &:after {
            display: block;
            content: '';
            clear: both;
        }
    }
    .detail_left {
        float: left;
        width: 40%;
        height: 100%
        padding-top: 5vw;
        & > .left_wrap {
            margin-bottom: 10px;
        }
        .movie_detail_title {
            font-size: 40px;
            h1 {
                line-height: 1.3;
            }
        }
        .movie_detail_info {
            font-size: 18px;
            p {
                line-height: 1.2;
            }
        }
        .movie_detail_cast {
            font-size: 15px;
            li {
               margin-bottom: 10px;
               span {
                   line-height: 1.2;
               }
               .cast_txt {
                   margin-right: 5px;
               }
               .cast_desc {
                   opacity: 0.5;
               }
            }
        }
        .movie_detail_icon {
            position: relative;
            .icon_play {
                background-color: rgb(252, 66, 106);
                color: rgb(255, 255, 255);
                padding: 10px 20px 10px 50px;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.1s ease-in;
                span {
                    font-size: 18px;
                }
                &:before {
                    content:''; 
                    height:0; 
                    width:0; 
                    display:block; 
                    border:7px transparent solid; 
                    border-right-width:0; 
                    border-left-color:rgb(255, 255, 255);; 
                    position:absolute; 
                    top:50%; 
                    left:30px;
                    transform:translate(-50%, -50%);
                }
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    
    }
    .detail_right {
        float: right;
        width: 50%;
        height: 100%;
    }
`;

const MovieDetail = ({clazzName, show, onClick}) => {
    return(
        show ?
            <MovieDetailBlock className={clazzName} onClick={onClick}>
                <div className="movie_detail">
                    <div className="detail_left">
                        <div className="left_wrap movie_detail_title">
                            <h1>영화제목</h1>
                        </div>
                        <div className="left_wrap movie_detail_info">
                            <p>정보</p>
                        </div>
                        <ul className="left_wrap movie_detail_cast">
                            <li>
                                <span className="cast_txt">감독</span>
                                <span className="cast_desc">감독</span>
                            </li>
                            <li>
                                <span className="cast_txt">출연진</span>
                                <span className="cast_desc">김진태</span>
                            </li>
                        </ul>
                        <div className="left_wrap movie_detail_icon">
                            <button className="icon_play">
                                <span>재생</span>
                            </button>
                        </div>
                    </div>
                    <div className="detail_right">
                        <span>이미지</span>
                    </div>
                </div>
            </MovieDetailBlock>
        :
        null
    );
};

export default MovieDetail;