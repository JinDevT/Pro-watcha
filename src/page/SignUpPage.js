import React from 'react';
import SignTemplate from '../component/sign/SignTemplate';
import SignUpForm from '../containers/sign/SignUpForm';
import CheckBox from '../component/sign/ChexBox';

const SignUpPage = () => {
    return (
        <SignTemplate>
            <SignUpForm type="register">
                <CheckBox/>
            </SignUpForm>
        </SignTemplate>
    );
}

export default SignUpPage;