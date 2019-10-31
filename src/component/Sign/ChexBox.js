import React from 'react';
import styled from 'styled-components';

const CheckbocBlock = styled.div`
    margin-bottom: 20px;
    font-size : 12px;
    color: #d5d4d7;
    & > .agree_box {
        margin-bottom: 10px;
    }

    & > .agree_box > label {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 5px;
    }

    & > .agree_box > label > .txt_desc {
        margin-left: 5px;
        line-height: 1.3;
    }

`;

const CheckboxInput = styled.input`

    
`;


// 회원가입 체크박스.
const CheckBox =() =>{
    return(
        <CheckbocBlock>
            <div className="agree_box">
                <label>
                    <CheckboxInput type="checkbox" />
                    <span className="txt_desc">전체약관에 동의합니다.</span>
                </label>
                <label>
                    <CheckboxInput type="checkbox" />
                    <span className="txt_desc">왓챠 서비스 이용약관에 동의합니다.</span>
                </label>
                <label>
                    <CheckboxInput type="checkbox" />
                    <span className="txt_desc">왓챠플레이 서비스 이용약관에 동의합니다.</span>
                </label>
                <label>
                    <CheckboxInput type="checkbox" />
                    <span className="txt_desc">개인정보 취급방침에 동의합니다.</span>
                </label>
            </div>
        </CheckbocBlock>
       
        
    );
}

export default CheckBox;