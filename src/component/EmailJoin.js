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
                                    <form className="form_wrap" onSubmit={this.handleSubmit}>
                                        
                                        {/* 회원가입 */}
                                        <div className="form_inner">
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
                                        <div>
                                            <div>
                                                <label>
                                                    <input type="checkbox"
                                                    />
                                                    전체약관에 동의합니다.
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="checkbox"
                                                    />
                                                    왓챠 서비스 이용약관에 동의합니다.
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="checkbox"
                                                    />
                                                    왓챠플레이 서비스 이용약관에 동의합니다.
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="checkbox"
                                                    />
                                                    개인정보 취급방침에 동의합니다.
                                                </label>
                                            </div>
                                        </div>
                                        {/* //checkbox */}
                                        
                                        <div>
                                            <button type="submit">가입완료</button>
                                            <p>결제정보요? 충분히 둘러보시고 입력해도 늦지 않아요.</p>
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