import React from 'react';
import SignTemplate from '../component/Sign/SignTemplate';
import SignInForm from '../containers/Sign/SignInForm';

const SignInPage = () => {
    return (
        <SignTemplate>
            <SignInForm />
        </SignTemplate>
    );
}

export default SignInPage;