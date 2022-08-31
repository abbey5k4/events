import React from 'react'
import ForgotPass from '../src/container/ForgotPassword';
import SignUpLayout from '../src/layout/signUpLayout';

const ForgotPassword = () => {
    return (
        <div>
            <SignUpLayout>
                <ForgotPass />
            </SignUpLayout>
        </div>
    )
}

export default ForgotPassword;
