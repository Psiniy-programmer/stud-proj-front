import React, { useState } from 'react';
import styles from './PasswordForm.module.scss';

export interface Password {
    password: string;
}

interface PasswordFormProps {
    submitText: string;
    onSubmit: (password: Password) => any;
}

function PasswordForm({ submitText, onSubmit }: PasswordFormProps) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({password});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="password"
                name="password"
                aria-label="Пароль"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.field}
            />
            <input 
                type="password"
                aria-label="Повтор пароля"
                placeholder="Повтор пароля"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.field}
            />
            <button className={styles.submit}>
                {submitText}
            </button>
        </form>
    );
}

export default PasswordForm;