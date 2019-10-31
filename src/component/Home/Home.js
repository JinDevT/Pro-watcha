import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Cont = styled.div`
    position: relative;
    min-height: 900px;
    ${props => {
        if(props.Content === 'Cont1') return props.backgroundImg;
        else if(props.Content === 'Cont2') return props.backgroundImg;
        else if(props.Content === 'Cont3') return props.backgroundImg;
        else return props.backgroundImg;
    }} 
    .inner{
        height: 100vh;
        width: 100%;
        position: relative;
        margin: 0 auto;
        padding: 0 135px;
    }
    .area_text{
        overflow: hidden;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 100;
    }
    .big_tit {
        margin-top: 70px;
        font-size: 60px;
        letter-spacing: 0.3px;
        line-height: 1;
        color:${props => {
            if(props.Content === 'Cont1') return '#333';
            else if(props.Content === 'Cont2') return '#fff';
            else if(props.Content === 'Cont3') return '#333';
            else return '#333';
        }};
    }

    .small_tit {
        margin: 50px 0;
        font-size: 20px;
        opacity: 0.8;
        color:${props => {
            if(props.Content === 'Cont1') return '#555';
            else if(props.Content === 'Cont2') return '#eee';
            else if(props.Content === 'Cont3') return '#555';
            else return '#555';
        }};
    }
    .btn {
        display: inline-block;
        height: 60px;
        width: 200px;
        padding: 0 15px;
        margin-top: 35px;
        line-height: 60px;
        border-radius: 30px;
        text-align: center;
        font-size: 20px;
        background-color: #fc426a;
        color: #fff;
    }

`;

const Home = (props) =>{
    console.log(props.backgroundImg);
    return(
        <Cont Content={props.content} style={{backgroundImage : ''}}>
            <div className="inner">
                <div className="area_text">
                    <h2 className="big_tit" >{props.title}</h2>
                    <h5 className="small_tit">{props.subTitle}</h5>
                    <Link to="/start" className="btn free_btn">
                        {props.btnTitle}
                    </Link>
                </div>
            </div>
        </Cont>
    )
}

export default Home;