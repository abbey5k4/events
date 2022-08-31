import React from 'react'
import ClinicSignIn from '../../src/container/SignIn/clinical';
import SignUpLayout from '../../src/layout/signUpLayout';

const ClinicalSignIn = () => {
    return (
        <div>
            <SignUpLayout>
                <ClinicSignIn />
            </SignUpLayout>
        </div>
    )
}

export default ClinicalSignIn;
