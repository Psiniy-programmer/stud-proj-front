import React, { useState } from 'react';
import GenderInput from '@components/controls/GenderInput';
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
    const [gender, setGender] = useState() as any;

    return (
        <form onSubmit={() => onSubmit({email, phoneNumber, gender})}>
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
                onChange={(e) => setGender((e.target as any).value)} 
            />
            <button className={styles.submit}>Далее</button>
        </form>
    );
}

export default ContactsForm;