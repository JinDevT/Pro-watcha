import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const MoviSliderBlock = styled.div`
    height: 100%;
`;

const MovieTitleBox = styled.div`
    padding: 0 50px;
    margin-bottom: 10px;
    h3 {
        float: left;
        color: #fff;
        line-height: 1.3;
    }
    .all_view {
        float: right;
        display: block;
        color: #fff;
        opacity: 0.5;
    }
    &:after {
        display: block;
        content: '';
        clear: both;
    }
`;

const MovieListBox = styled.div`
    padding: 0 50px 20px;
    .movie_ul {
        display: flex;
        align-items: center;
        overflow-y: hidden;
    }

    .movie_ul > li {
        display: inline-block;
        padding: 0 2px;
        width: 250px; /* 임시로 너비 지정.*/
    }

    .movie_detail_move {
        display: block;
    }
    .title_li_box {

    }
    .movie_img_box {
        width: 100%;
        height: 0;
        position: relative;
        overflow: hidden;
        padding: 70px 0;
    }
    .movie_img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        background-color: #fff;
    }
    .movie_tit {
        margin-top: 5px;
        font-size: 15px;
        color: #fff;
    }
`;



const MovieListSlider = () => {
    return(
            <MoviSliderBlock>
                <MovieTitleBox>
                    <h3>왓플인기작</h3>
                    <Link to='/' className="all_view">모두보기 ></Link>
                </MovieTitleBox>
                <MovieListBox>
                    <ul className="movie_ul">
                        <li>
                            <Link to='/' className="movie_detail_move">
                                <div className="title_li_box">
                                    <div className="movie_img_box">
                                        <img src="" className="movie_img" alt=''/>
                                    </div>
                                    <div className="movie_tit">
                                        <span>무비이름</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className="movie_detail_move">
                                <div className="title_li_box">
                                    <div div className="movie_img_box">
                                        <img src="" className="movie_img" alt=''/>  
                                    </div>
                                    <div className="movie_tit">
                                        <span>무비이름</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className="movie_detail_move">
                                <div className="title_li_box">
                                    <div div className="movie_img_box">
                                        <img src="" className="movie_img" alt=''/>
                                    </div>
                                    <div className="movie_tit">
                                        <span>무비이름</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className="movie_detail_move">
                                <div className="title_li_box">
                                    <div div className="movie_img_box">
                                        <img src="" className="movie_img" alt=''/>
                                    </div>
                                    <div className="movie_tit">
                                        <span>무비이름</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className="movie_detail_move">
                                <div className="title_li_box">
                                    <div div className="movie_img_box">
                                        <img src="" className="movie_img" alt=''/>
                                    </div>
                                    <div className="movie_tit">
                                        <span>무비이름</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </MovieListBox>
            </MoviSliderBlock>
    );
}

export default MovieListSlider;