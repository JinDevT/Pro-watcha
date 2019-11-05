import React from 'react';

const Slide = ( props ) => {
    const styles = {
      backgroundImage: `url(${props.backgroundImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return (
        <div className="slide" style={styles}>
            <div className='cont'>
                <div className="area_txt">
                    <div className="work_box">
                        <h2 className="work_tit">{props.title}</h2>
                        <p className="work_desc">{props.subTitle}</p>
                    </div>
                </div>
            </div>
            
        </div>)
  }

  export default Slide;