import React from 'react';
import styled from 'styled-components';


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
`;

const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    border: 0;
    font-size: 18px;
`;
const SignForm = ({onSubmit, handleChangeName, handleChangeEmail, handleChangePass, children}) => {
    return (
        <SignFormBlock>
            <h3>회원가입</h3>
            <form  className="form_wrap" onSubmit={onSubmit}>
                <div className="form_join_inner">
                    <div className="input_box">
                        <label htmlFor="inputName">
                            <StyledInput
                               type="name"
                               id="inputName"
                               placeholder="이름 (홍길동)"
                            //    value={form.name}
                               onChange={handleChangeName}
                            />
                        </label>
                        <label htmlFor="inputEmail">
                            <StyledInput
                               type="email"
                               id="inputEmail"
                               placeholder="이메일 (example@gmail.com)"
                            //    value={form.email}
                               onChange={handleChangeEmail}
                            />
                        </label>
                        <label htmlFor="inputPassWord">
                            <StyledInput
                               type="password"
                               id="inputPassWord"
                               placeholder="비밀번호 (6자이상)"
                            //    value={form.password}
                               onChange={handleChangePass}
                            />
                        </label>
                    </div>
                </div>
                {children}
            </form>
        </SignFormBlock>
    );
};

export default SignForm;