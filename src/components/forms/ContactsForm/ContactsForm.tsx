import React, { useState } from 'react';
import GenderInput, { Gender } from '@components/controls/GenderInput';
import styles from './ContactsForm.module.scss';

export interface Contacts {
    email: string;
    phoneNumber: string;
    gender: 'male' | 'female';
}

interface ContactsFormProps {
    onSubmit: (contacts: Contacts) => any;
}

function ContactsForm({onSubmit}: ContactsFormProps) {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState<Gender>('male');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({email, phoneNumber, gender});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                name="email"
                aria-label="Электронная почта" 
                placeholder="Почта" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.field}
            />
            <input 
                type="tel"
                name="phoneNumber"
                aria-label="Номер телефона" 
                placeholder="Телефон" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={styles.field}
            />
            <GenderInput 
                value={gender} 
                onChange={(e) => setGender(e.target.value as Gender)} 
            />
            <button className={styles.submit}>Далее</button>
        </form>
    );
}

export default ContactsForm;