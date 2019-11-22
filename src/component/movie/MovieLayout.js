import React from 'react';
import styled from 'styled-components';

const MoviListBlock = styled.div`
    position: relative;
    z-index: 100;
    margin-top: -65px;

    .movie_wrap > h3{
        padding: 0 50px;
        margin-bottom: 10px;
        color: #fff;
        line-height: 1.3;
        font-size: 20px;
    }
`;

const MovieLayout = ({children}) => {
    return(
        <MoviListBlock>
            <div className="movie_wrap">
               {children}
            </div>
        </MoviListBlock>
    );
};

export default MovieLayout;