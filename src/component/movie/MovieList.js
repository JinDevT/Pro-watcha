import React from 'react';
import styled from 'styled-components';

import './Movie.css';



const MoviListBlock = styled.div`
    position: relative;
    z-index: 100;
    margin-top: -65px;
`;

const MovieList = ({children}) => {
    return(
        <MoviListBlock>
            <div className="movie_wrap">
                {children}
            </div>
        </MoviListBlock>
    );
};

export default MovieList;