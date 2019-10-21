import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/EmailJoin.css';


class EmailJoin extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChangeName = ({ target : { value }}) => {
        this.setState({ name : value})
    }

    handleChangeEmail =({ target : { value }}) => {
        this.setState({ email : value})
    }

    handleChangePass = ({ target : { value }}) => {
        this.setState({ password : value})
    }

    handleSubmit = () => {
        alert(this.name, this.email, this.password)
        console.log(this.name, this.email, this.password)
    }

    hand
    render() {
        console.log('render');
        const { name, email, password } = this.state; 
        return(
            <div className="wrap email_join">
                <div className="inner">
                    {/* nav */}
                    <nav className="nav">
                        <Link to='/' className="logo">로고</Link>
                        <div className="right_nav">
                        <Link to='/start' className="btn start_btn">로그인</Link>
                        </div>
                    </nav>
                    {/* //nav */}
                    <div className="container">
                        <div className="cont">
                            <div className="inner">
                                <div className="area_text">
                                    <div className="wrap_tit">
                                        <p>회원가입</p>
                                    </div>
                                    <form className="form_wrap" >
                                        
                                        {/* 회원가입 */}
                                        <div className="form_join_inner">
                                            <div className="input_box">
                                                <label htmlFor="inputName">
                                                    <input 
                                                        type="name" 
                                                        id="inputName" 
                                                        placeholder="이름 (홍길동)" 
                                                        value={name}
                                                        onChange={this.handleChangeName} 
                                                    />
                                                </label>
                                                <label htmlFor="inputEmail">
                                                    <input 
                                                        type="email" 
                                                        id="inputEmail" 
                                                        placeholder="이메일 (example@gmail.com)" 
                                                        value={email}
                                                        onChange={this.handleChangeEmail}
                                                    />
                                                </label>
                                                <label htmlFor="inputPassWord">
                                                    <input 
                                                        type="password" 
                                                        id="inputPassWord" 
                                                        placeholder="비밀번호 (6자이상)" 
                                                        value={password}
                                                        onChange={this.handleChangePass}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        {/* //회원가입 */}

                                        {/* checkbox */}
                                        <div className="form_agree_inner">
                                            <div className="agree_box all_checkbox">
                                                <label>
                                                    <input type="checkbox"
                                                    />
                                                    <span className="txt_desc">전체약관에 동의합니다.</span>
                                                </label>
                                            </div>
                                            <div className="agree_box">
                                                <label>
                                                    <input type="checkbox"
                                                    />
                                                    <span className="txt_desc">왓챠 서비스 이용약관에 동의합니다.</span>
                                                </label>
                                            </div>
                                            <div className="agree_box">
                                                <label>
                                                    <input type="checkbox"
                                                    />
                                                    <span className="txt_desc">왓챠플레이 서비스 이용약관에 동의합니다.</span>
                                                </label>
                                            </div>
                                            <div className="agree_box">
                                                <label>
                                                    <input type="checkbox"
                                                    />
                                                    <span className="txt_desc">개인정보 취급방침에 동의합니다.</span>
                                                </label>
                                            </div>
                                        </div>
                                        {/* //checkbox */}
                                        
                                        <div className="form_join_btn">
                                            <button className="join_complete_btn" type="submit" onSubmit={this.handleSubmit}>가입완료</button>
                                            <p className="txt_desc">결제 정보요? 충분히 둘러보시고 입력해도 늦지 않았어요.</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default EmailJoin;