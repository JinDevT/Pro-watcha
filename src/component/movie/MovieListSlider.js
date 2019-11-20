import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MovieDetail from './MovieDetail';




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
        // overflow-y: hidden;
       
        width: 100%;
        white-space: nowrap;
        transition: all 0.5s;
        padding: 15px 0;
        overflow-y: hidden;
        &::-webkit-scrollbar {
            background: none;
            border: 1px solid #303030;
        }
        &::-webkit-scrollbar-thumb {
            background: #555;
            border-radius: 30px;
        }
    }

    .movie_ul > li {
       
        padding: 0 2px;
        transition: all .2s ease-in;
        cursor: pointer;
    }

    .movie_detail_move {
        display: block;
    }
    .title_li_box {

    }
    .movie_img_box {
        position: relative;
        overflow: hidden;
        width: 15vw;
        height: 10vw;
        background-size: 100% 100%;
        border-radius: 1px;
        cursor: pointer;
        transition: 0.5s;
        color: white;
        &:hover {
            width: 22vw;
            height: 15vw;
            transition: 0.5s;
            opacity: 1;
            transition-delay: 0.3s;
            .movie_item {
                visibility: visible;
            }
           
        }

    }
    .movie_img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: url("https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1564113416/qc8txgzqiwyftqbklzdd.jpg"); background-size: cover; background-repeat: no-repeat; background-position: 50% 60%;
        background-size: cover; 
        background-repeat: no-repeat; 
        background-position: 50% 60%;
    }

    .movie_item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity:0;
        visibility: hidden;
        &:hover {
            width: 22vw;
            height: 15vw;
            opacity: 1;
            transition: 0.4s;
            transition-delay: 0.4s;
            
        }
        &_1 {
            flex-grow: 1;
            text-align: center;
            margin: 0 auto;
        }
        &_2,&_3,&_4 {
            align-self: flex-start;
            font-size: 1.2rem;
            margin-bottom: 0.5vw;
            padding: 0 15px;
        }
        &_5 {
            margin-bottom: 0.5vw;
            text-align: center;
        }
       
        .movie_play {
            display: flex;
            justify-content: center;
            align-items: center;
            .icon_play {
              position: relative;
              justify-content: center;
              width: 3vw;
              height: 3vw;
              margin-top:3vw;
              border-radius: 40px;
              background: rgba(0, 0, 0, 0.5);
              border: 2px solid #fff;
              &:before {
                content:''; 
                height:0; 
                width:0; 
                display:block; 
                border:10px transparent solid; 
                border-right-width:0; 
                border-left-color:#c92a2a; 
                position:absolute; 
                top:50%; 
                left:54%;
                transform:translate(-50%, -50%);
              }
            }
          }
          .icon_detail {
                position:relative;
                display:block;
                height:40px;
                width:40px; 
                &:before {
                    content:'';
                    position:absolute;
                    bottom:15px;
                    left:7px; 
                    height:20px; 
                    width:20px; 
                    display:block; 
                    border:3px solid #fff; 
                    border-right-width:0; 
                    border-top-width:0; 
                    transform:rotate(-45deg);
                    -webkit-transform:rotate(-45deg);
                    -moz-transform:rotate(-45deg);
                    -o-transform:rotate(-45deg);
                    -ms-transform:rotate(-45deg);
                }
                // hover 했을 때, 상속받아서 사용할 방법은 없을까?
                &:hover:before {
                    content:'';
                    position:absolute;
                    bottom:15px;
                    left:7px; 
                    height:20px; 
                    width:20px; 
                    display:block; 
                    border:3px solid #000; 
                    border-right-width:0; 
                    border-top-width:0; 
                    transform:rotate(-45deg);
                    -webkit-transform:rotate(-45deg);
                    -moz-transform:rotate(-45deg);
                    -o-transform:rotate(-45deg);
                    -ms-transform:rotate(-45deg); 
                }
               
            }
    }
    .movie_tit {
        margin-top: 5px;
        font-size: 15px;
        color: #fff;
    }
`;



const MovieListSlider = () => {

     const [ detail, setDetail ] = useState(false);
    // const [ movies, setMovie ] = useState(null);

    // const API_KEY = 'a158e2a9424bc69fec449dcaeb82aba8';
    // const API_URL = `https://api.themoviedb.org/3`;
    // const Genre =`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`

    // useEffect(() =>{
    //     const fetchMovies = async () => {
    //         try {
    //             setMovie(null);
    //             const response = await axios.get(Genre);
    //             setMovie(response.data);
    //             console.log(response.data);
    //         } catch (e) {
    //             throw(e);
    //         }
    //     };
    //     fetchMovies();
    // },[]);

    // if(!movies) return null

    const showDetail = () => {
        setDetail(true);
    }

    const closeDetail = () => {
        setDetail(false);
    }

    return(
            <>
                
                    <MoviSliderBlock >
                        <MovieTitleBox>
                            <h3>dd</h3>
                            <Link to='/' className="all_view">모두보기 ></Link>
                        </MovieTitleBox>
                        <MovieListBox>
                            <ul className="movie_ul">
                                <li>
                                    <div className="title_li_box">
                                        <div className="movie_img_box">
                                            <div className="movie_img" />
                                            <div className="movie_item">
                                                <div className="movie_item_1">
                                                    <div className="movie_play">
                                                        <Link to='/' className="icon_play"/>
                                                    </div>
                                                </div>
                                                <div className="movie_item_2">
                                                    <p className="movie_title">영화제목</p>
                                                </div>
                                                <div className="movie_item_3">
                                                    <p className="movie_desc">영회시간</p>
                                                </div>
                                                <div className="movie_item_4">
                                                    <p className="movie_info">영화소개</p>
                                                </div>
                                                <div className="movie_item_5" onClick={() => showDetail()}>
                                                    <i className="icon_detail"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="movie_tit">
                                            <span>무비이름</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <MovieDetail
                                clazzName={"moovieContainer " + (detail ? "show" : "hide")}
                                show={detail}
                                onClick={() => closeDetail()}
                            />
                        </MovieListBox>
                    </MoviSliderBlock>
               
            </>
    );
}

export default MovieListSlider;