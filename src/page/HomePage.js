import React, { Component } from 'react';
import Nav from '../component/common/Nav';
import Home from '../component/Home/Home';




class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            content:[
                {
                    title:'매주 5백 편 신작 업데이트, 영화 드라마 무제한 감상',
                    subTitle:'Apple 앱스토어  "2018 올해를 빛낸 최고작" 선정',
                    btnTitle:'무료체험 시작',
                    content:'Cont1',
                    backgroundImg:"https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1497512297/jm1efp1tlmzwqg12mght.jpg"
                },
                {
                    title:'PC, 스마트폰, 태블릿, 크롬캐스트, TV에서',
                    subTitle:'6만 편의 작품을 언제 어디서나 감상',
                    btnTitle:'무료체험 시작',
                    content:'Cont2',
                    backgroundImg:"https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1564113416/qc8txgzqiwyftqbklzdd.jpg"
                },
                {
                    title:'최고의 화질',
                    subTitle:'HD부터 Full-HD까지',
                    btnTitle:'무료체험 시작',
                    content:'Cont3',
                    backgroundImg:"https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1552894858/s0jdpxja7gw2vfvyrupk.jpg"
                },
                {
                    title:'4억개 평가 기반 최고의 추천 엔진',
                    subTitle:'소중한 2시간을 낭비할 순 없으니까',
                    btnTitle:'무료체험 시작',
                    content:'Cont4',
                    backgroundImg:"https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1558507774/arhvf0paf7wfrbzrotsu.jpg"
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
                    // state 값을 받아서 map 한 뒤에 각 값을 바인딩해서 출력
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

export default HomePage;