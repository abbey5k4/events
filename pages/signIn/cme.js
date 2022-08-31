import React from 'react'
import CmeSignIn from '../../src/container/SignIn/cme'
import SignUpLayout from '../../src/layout/signUpLayout'

const SignInCME = () => {
    return (
        <div>
            <SignUpLayout>
                <CmeSignIn />
            </SignUpLayout>
        </div>
    )
}

export default SignInCME
