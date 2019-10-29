import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './common/Nav';
import styled from 'styled-components';


const HomeBlock = styled.div`
    height: 100%;
`;

const Wrapper = styled.div`

`;

const Container = styled.div`
    overflow: hidden;
`;

const Cont = styled.div`
    position: relative;
    min-height: 900px;
    background : ${props => {
        if(props.Cont1) return '#fff';
        else if(props.Cont2) return '#000';
        else if(props.Cont3) return '#dddd';
        else return '#f2f2f2';
    }};
`;

const Inner = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    margin: 0 auto;
    padding: 0 135px;
`;

const AreaText = styled.div`
    overflow: hidden;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 100;
    
    .wrap_tit {
        color: #ffff;
        
    }

    .big_tit {
        margin-top: 70px;
        font-size: 60px;
        letter-spacing: 0.3px;
        line-height: 1;
    }

    .small_tit {
        margin: 50px 0;
        font-size: 20px;
        opacity: 0.8;
    }

    .free_btn {
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

const HomeTemplate= () => {
    return(
        <HomeBlock>
            <Wrapper>
                {/* nav */}
                <Nav/>
                {/* //nav */}

                {/* container */}
                <Container>
                    {/* cont01 */}
                    <Cont Cont1>
                        <Inner>
                            <AreaText>
                                <div className="wrap_tit">
                                    <p className="big_tit">매주 5백 편 신작 업데이트, 영화 드라마 무제한 감상</p>
                                    <p className="small_tit">Apple 앱스토어  "2018 올해를 빛낸 최고작" 선정</p>
                                    <Link to="/start" className="btn free_btn">무료체험 시작</Link>
                                </div>
                            </AreaText>
                        </Inner>
                    </Cont>
                    {/* //cont01 */}

                    {/* cont02 */}
                    <Cont Cont2>
                        <Inner>
                            <AreaText>
                                <div className="wrap_tit">
                                    <p className="big_tit">PC, 스마트폰, 태블릿, 크롬캐스트, TV에서</p>
                                    <p className="small_tit">6만 편의 작품을 언제 어디서나 감상</p>
                                    <Link to="/start" className="btn free_btn">무료체험 시작</Link>
                                </div>
                            </AreaText>
                        </Inner>
                    </Cont>
                    {/* //cont02 */}

                    {/* cont03 */}
                    <Cont Cont3>
                        <Inner>
                            <AreaText>
                                <div className="wrap_tit">
                                    <p className="big_tit">최고의 화질</p>
                                    <p className="small_tit">HD부터 Full-HD까지</p>
                                    <Link to="/start" className="btn free_btn">무료체험 시작</Link>
                                </div>
                            </AreaText>
                        </Inner>
                    </Cont>
                     {/* //cont03 */}

                    {/* cont04 */}
                    <Cont Cont4>
                        <Inner>
                            <AreaText>
                                <div className="wrap_tit">
                                    <p className="big_tit">4억개 평가 기반 최고의 추천 엔진</p>
                                    <p className="small_tit">소중한 2시간을 낭비할 순 없으니까</p>
                                    <Link to="/start" className="btn free_btn">무료체험 시작</Link>
                                </div>
                            </AreaText>
                        </Inner>
                    </Cont>
                    {/* //cont04 */}
                </Container>
                {/* //container */}
            </Wrapper>    
        </HomeBlock>
     );
}


export default HomeTemplate;