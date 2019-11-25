import React from 'react';
import styled from 'styled-components';

import './Movie.css';



const MoviSliderBlock = styled.div`
    height: 100%;
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

        .movie_ul > li {
       
            padding: 0 2px;
            transition: all .2s ease-in;
            cursor: pointer;
        }
    }
`;




const MovieList = ({children}) => {
    return(
        <MoviSliderBlock>
            <MovieListBox>
                <ul className="movie_ul">
                    {children}
                </ul>
            </MovieListBox>
        </MoviSliderBlock>
    );
};

export default MovieList;