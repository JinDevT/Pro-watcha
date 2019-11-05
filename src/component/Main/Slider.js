import React, { Component } from 'react';
import Slide from './Slide';


const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
  
  
  const RightArrow = (props) => {
    return (
      <div className="nextArrow arrow" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }

class Slider extends Component {
    constructor(props) {
      super(props)
      this.state={
          content:[
              {
                  title:'11월 1주 신작',
                  subTitle:'맘마미아!, 보이후드 등',
                  backgroundImg:'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1497512297/jm1efp1tlmzwqg12mght.jpg'
              },
              {
                title:'중세, 그리고 퇴폐미',
                subTitle:'화려한 이면 뒤 암흑의 시기, 중세배경의 영화들',
                backgroundImg:'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1564113416/qc8txgzqiwyftqbklzdd.jpg'
              },
              {
                title:'하루끝엔, 시트콤',
                subTitle:'지친 일상에 웃음이 필요할 때',
                backgroundImg:'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_1620,q_80,w_2880/v1552894858/s0jdpxja7gw2vfvyrupk.jpg'
              },
          ],
          currentIndex: 0,
          translateValue: 0
      }
    }
    
    //이전버튼
    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
    
    //다음버튼
    goToNextSlide = () => {
      if(this.state.currentIndex === this.state.content.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  
    slideWidth = () => {
       return document.querySelector('.slide').clientWidth
    }
  
    render() {
      const { content } = this.state;
      return (
        <div className="slider">
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.5s'
            }}>
              {
               content.map((v, i) => (
                  <Slide 
                    key={i} 
                    title = {v.title}
                    subTitle = {v.subTitle}
                    backgroundImg ={v.backgroundImg} 
                  />
                ))
              }
          </div>
  
          <LeftArrow
           goToPrevSlide={this.goToPrevSlide}
          />
  
          <RightArrow
           goToNextSlide={this.goToNextSlide}
          />
        </div>
      );
    }
  }
  export default Slider;
