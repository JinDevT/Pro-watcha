import React from 'react';
import SignTemplate from '../component/Sign/SignTemplate';
import SignForm from '../component/Sign/SignForm';
import CheckBox from '../component/Sign/ChexBox';

const SignUpPage = () => {
    return (
        <SignTemplate>
            <SignForm>
                <CheckBox/>
            </SignForm>
        </SignTemplate>
    )
}

export default SignUpPage;