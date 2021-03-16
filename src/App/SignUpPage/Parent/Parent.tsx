import React, { useState } from 'react';
import FullNameForm from '@components/forms/FullNameForm';
import ContactsForm from '@components/forms/ContactsForm';
import PasswordForm from '@components/forms/PasswordForm';
import styles from './Parent.module.scss';

function Parent() {
    const [step, setStep] = useState(0);
    const [data, setData] = useState({});

    const handleStep = (formData: object) => {
        setData(value => ({...value, ...formData}));
        setStep(value => value + 1);
    };
    const handleSubmit = (formData: object) => {
        // @ts-ignore
        const submitData = {...data, ...formData};
        // TODO
    };

    switch (step) {
    default:
    case 0:
        return (
            <React.Fragment>
                <h1 className={styles.heading}>
                    Регистрация
                </h1>
                <FullNameForm onSubmit={handleStep} />
            </React.Fragment>
        );
    case 1:
        return (
            <React.Fragment>
                <h1 className={styles.heading}>
                    Регистрация
                </h1>
                <ContactsForm onSubmit={handleStep} />
            </React.Fragment>
        );
    case 2:
        return (
            <React.Fragment>
                <h1 className={styles.passwordHeading}>
                    Регистрация
                </h1>
                <PasswordForm submitText="Создать аккаунт" onSubmit={handleSubmit} />
            </React.Fragment>
        );
    }
}

export default Parent;