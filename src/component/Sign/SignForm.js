import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const SignFormBlock = styled.div`
    display: inline-block;
    overflow: hidden;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    text-align: center;
    z-index: 100;

    h3 {
        margin-bottom: 20px;
        text-align: left;
        font-size: 18px;
        color: #fff;
    }

    .form_wrap {
        text-align: left;
    }

    .form_join_inner {
        margin-bottom: 20px;
    }

    .input_box > label {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        padding: 10px;
        padding-right: 40px;
        background-color: #fff;
        border-bottom: 1px solid rgba(154,151,161,0.2);
    }

    .input_box > label:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .input_box > label:last-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom: none;
    }
    .txt_desc  {
        font-size: 12px;
        color: #d5d4d7;
        line-height: 1.3;
        text-align: center;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    border: 0;
    font-size: 18px;
`;

const textMap ={
    login : '로그인',
    register : '회원가입',
    facebook : '페이스북 로그인',
    
};

//회원가입,
const SignForm = ({type, form, onChange, onSubmit, children}) => {
    const text = textMap[type];
    return (
        <SignFormBlock>
            <h3>{text}</h3>
            <form  className="form_wrap" onSubmit={onSubmit}>
                <div className="form_join_inner">
                    <div className="input_box">
                        <label htmlFor="inputName">
                            <StyledInput
                            name="username"
                            type="name"
                            id="inputName"
                            placeholder="아이디"
                            value={form.username}
                            onChange={onChange}
                            />
                        </label>
                        <label htmlFor="inputPassword">
                            <StyledInput
                               name="password"
                               type="password"
                               id="inputPassword"
                               placeholder="비밀번호"
                               value={form.password}
                               onChange={onChange}
                            />
                        </label>
                        {type === 'register' && (
                            <label htmlFor="inputPasswordConfirm">
                            <StyledInput
                               name="passwordConfirm"
                               type="password"
                               id="inputPasswordConfirm"
                               placeholder="비밀번호 확인"
                               value={form.passwordConfirm}
                               onChange={onChange}
                            />
                            </label>
                        )}
                        
                    </div>
                </div>
                {children}
                <Button sign>{text}</Button>
                {type === 'register' && (
                    <p className="txt_desc">결제 정보요? 충분히 둘러보시고 입력해도 늦지 않았어요.</p>
                )};

                {type === 'login' && (
                    <Button facebook>페이스북 로그인</Button>
                )}
                
            </form>
        </SignFormBlock>
    );
};

export default SignForm;