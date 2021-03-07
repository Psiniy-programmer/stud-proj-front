import React from 'react';
import FormPageTemplate from '@components/form/FormPageTemplate';
import SignUp from './SignUp';

function AuthPage() {
    return (
        <FormPageTemplate>
            <SignUp />
        </FormPageTemplate>
    );
}

export default AuthPage;