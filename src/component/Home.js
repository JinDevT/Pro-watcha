import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import '../assets/css/Home.css';

const Home= () => {
    return(
        <div className="wrap">
            <div className="inner">
                {/* nav */}
                <Nav/>
                {/* //nav */}
                {/* container */}
                
                <div className="container">
                    {/* cont01 */}
                    <div className="cont cont01">
                        <div className="inner">
                            <div className="area_text">
                                <div className="wrap_tit">
                                    <p className="big_tit">매주 5백 편 신작 업데이트, 영화 드라마 무제한 감상</p>
                                    <p className="small_tit">Apple 앱스토어  "2018 올해를 빛낸 최고작" 선정</p>
                                    <Link to="/start" className="btn free_btn">무료체험 시작</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //cont01 */}

                    {/* cont02 */}
                    <div className="cont cont02">
                        <div className="inner">
                            <div className="area_text">
                                <div className="wrap_tit">
                                    <p className="big_tit">PC, 스마트폰, 태블릿, 크롬캐스트, TV에서</p>
                                    <p className="small_tit">6만 편의 작품을 언제 어디서나 감상</p>
                                    <Link to="/start" className="btn free_btn">무료체험 시작</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //cont02 */}

                    {/* cont03 */}
                    <div className="cont cont03">
                        <div className="inner">
                            <div className="area_text">
                                <div className="wrap_tit">
                                    <p className="big_tit">최고의 화질</p>
                                    <p className="small_tit">HD부터 Full-HD까지</p>
                                    <Link to="/start" className="btn free_btn">무료체험 시작</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* //cont03 */}

                    {/* cont04 */}
                    <div className="cont cont04">
                        <div className="inner">
                            <div className="area_text">
                                <div className="wrap_tit">
                                    <p className="big_tit">4억개 평가 기반 최고의 추천 엔진</p>
                                    <p className="small_tit">소중한 2시간을 낭비할 순 없으니까</p>
                                    <Link to="/start" className="btn free_btn">무료체험 시작</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //cont04 */}
                </div>
                {/* //container */}
            </div>    
        </div>
     );
}


export default Home;