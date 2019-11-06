import React, { Component } from 'react';
import Nav from '../common/Nav';
import Home from './Home';




class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state={
            content:[
                {
                    title:'매주 5백 편 신작 업데이트, 영화 드라마 무제한 감상',
                    subTitle:'Apple 앱스토어  "2018 올해를 빛낸 최고작" 선정',
                    btnTitle:'무료체험 시작',
                    content:'Cont1',
                    backgroundImg:"https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1552634214/g1larnvghhconzkthpfc.jpg"
                },
                {
                    title:'PC, 스마트폰, 태블릿, 크롬캐스트, TV에서',
                    subTitle:'6만 편의 작품을 언제 어디서나 감상',
                    btnTitle:'무료체험 시작',
                    content:'Cont2',
                    backgroundImg:"https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1544687596/si4teaaw4ozu3fhpvvfa.jpg"
                },
                {
                    title:'최고의 화질',
                    subTitle:'HD부터 Full-HD까지',
                    btnTitle:'무료체험 시작',
                    content:'Cont3',
                    backgroundImg:"https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1568002969/dcxpkrawmosat0d4epto.jpg"
                },
                {
                    title:'4억개 평가 기반 최고의 추천 엔진',
                    subTitle:'소중한 2시간을 낭비할 순 없으니까',
                    btnTitle:'무료체험 시작',
                    content:'Cont4',
                    backgroundImg:"https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1552024363/a5itxxodojdceiwo8qsm.jpg"
                },
                
            ]
        }
    }
    

    render() {
        const { content } = this.state;
        console.log(content[0].title)
        return (
            <div>
                <Nav/>
                {
                    content.map((v,i)=>{
                        return(
                        <Home
                            key={i}
                            title={
                                v.title
                            }
                            subTitle={
                                v.subTitle
                            }
                            btnTitle={
                                v.btnTitle
                            }
                            content={
                                v.content
                            }
                            backgroundImg={
                                v.backgroundImg
                            }
                        />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default HomeContent;