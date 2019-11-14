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
        height: 35.15vw;
        opacity: 1;
    }
    .movie_detail {
        height: 100%;
        width: 100%;
    }
`;

const MovieDetail = ({clazzName, show, onClick}) => {
    return(
        show ?
            <MovieDetailBlock className={clazzName} onClick={onClick}>
                <div className="movie_detail">
                    <h1>안녕</h1>
                </div>
            </MovieDetailBlock>
        :
        null
    );
};

export default MovieDetail;