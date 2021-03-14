import React, { useState } from 'react';
import MultiStepForm from '@components/forms/MultiStepForm';
import FullNameForm from '@components/forms/FullNameForm';
import ContactsForm from '@components/forms/ContactsForm';
import PasswordForm from '@components/forms/PasswordForm';
import styles from './Parent.module.scss';

function Parent() {
    const [step, setStep] = useState(0);

    const handleSubmit = () => {
        // TODO
    }

    return (
        <React.Fragment>
            <h1 className={step === 2 ? styles.passwordHeading : styles.heading}>
                Регистрация
            </h1>
            <MultiStepForm 
                step={step} 
                onNextStepClick={() => setStep(value => value + 1)} 
                onSubmit={handleSubmit}
            >
                <FullNameForm />
                <ContactsForm />
                <PasswordForm />
            </MultiStepForm>
        </React.Fragment>
    );
}

export default Parent;