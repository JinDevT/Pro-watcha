import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Input from './Input';

class Find_password extends Component {
    state = {
        email: '',
        
    }

    handleChangeEmail =({ target : { value }}) => {
        this.setState({ email : value})
    }



    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email)
        
    }
    render() {
        const { email } = this.state;
        return(
            <div className="wrap sign sign_pass">
                <div className="inner">
                    {/* nav */}
                    <Nav />
                    {/* //nav */}
                    <div className="container">
                        <div className="cont">
                            <div className="inner">
                                <div className="area_text">
                                    <div className="wrap_tit">
                                        비밀번호를 잊어버리셨군요.
                                    </div>
                                    <form className="form_wrap" onSubmit={this.handleSubmit} >
                                        <div className="form_join_inner">
                                            <div className="input_box">
                                               <label htmlFor="inputEmail">
                                                    <Input 
                                                        type="email"
                                                        id="inputEmail"
                                                        placeholder="이메일을 입력해주세요."
                                                        value={email}
                                                        onChange={this.handleChangeEmail}
                                                    />
                                                </label>
                                            </div>
                                        </div>    
                                        <p className="txt_desc">기존에 가입하신 이메일 주소를 입력해주시면 임시주소가 발생됩니다. 임시주소로 들어오신 뒤 새로운 비밀번호를 설정하세요.</p>
                                        
                                        <div className="form_join_btn">
                                            <button className="join_complete_btn" type="submit" >확인</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Find_password;