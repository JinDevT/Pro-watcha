import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Input from '../Input';

class Sign_in extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeEmail =({ target : { value }}) => {
        this.setState({ email : value})
    }

    handleChangePass = ({ target : { value }}) => {
        this.setState({ password : value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name, this.state.email, this.state.password)
        
    }
    render() {
        const { email, password } = this.state;
        return(
            <div className="wrap sign sign_in">
                <div className="inner">
                    {/* nav */}
                    <Nav />
                    {/* //nav */}
                    <div className="container">
                        <div className="cont">
                            <div className="inner">
                                <div className="area_text">
                                    <div className="wrap_tit">
                                        <span>로그인</span>
                                        <Link to='/find_password' className="find_password">비밀번호를 잊어버리셨나요?</Link>
                                    </div>
                                    <form className="form_wrap" onSubmit={this.handleSubmit} >
                                        <div className="form_join_inner">
                                            <div className="input_box">
                                               <label htmlFor="inputEmail">
                                                    <Input 
                                                        type="email"
                                                        id="inputEmail"
                                                        placeholder="이메일 (example@gmail.com)"
                                                        value={email}
                                                        onChange={this.handleChangeEmail}
                                                    />
                                                </label>
                                                <label htmlFor="inputPassWord">
                                                    <Input 
                                                        type="password"
                                                        id="inputPassWord"
                                                        placeholder="비밀번호 (6자이상)"
                                                        value={password}
                                                        onChange={this.handleChangePass}
                                                    />
                                                </label>
                                            </div>
                                        </div>    
                                        
                                        <div className="form_join_btn">
                                            <button className="join_complete_btn" type="submit" >로그인</button>
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

export default Sign_in;