import React from 'react';
import SignTemplate from '../component/sign/SignTemplate';
import SignInForm from '../containers/sign/SignInForm';

const SignInPage = () => {
    return (
        <SignTemplate>
            <SignInForm />
        </SignTemplate>
    );
}

export default SignInPage;