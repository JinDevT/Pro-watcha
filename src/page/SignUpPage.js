import React from 'react';
import SignTemplate from '../component/Sign/SignTemplate';
import SignUpForm from '../containers/Sign/SignUpForm';
import CheckBox from '../component/Sign/ChexBox';



const SignUpPage = () => {
    return (
        <SignTemplate>
            <SignUpForm type="register">
                <CheckBox/>
            </SignUpForm>
        </SignTemplate>
    )
}

export default SignUpPage;