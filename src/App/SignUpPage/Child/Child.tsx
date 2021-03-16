import React, { useState } from 'react';
import GenderInput, { Gender } from '@components/controls/GenderInput';
import styles from './Child.module.scss';

function Child() {
    const [step, setStep] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [parentsEmail, setParentsEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState<Gender>('male');

    const handleStep = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStep(value => value + 1);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO
    };

    switch (step) {
    default:
    case 0:
        return (
            <React.Fragment>
                <h1 className={styles.heading}>Регистрация</h1>
                <form onSubmit={handleStep}>
                    <input 
                        type="text"
                        aria-label="Имя"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.field}
                    />
                    <input 
                        type="number"
                        aria-label="Возраст"
                        placeholder="Возраст"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className={styles.field}
                    />
                    <input 
                        type="email"
                        aria-label="Почта родителей"
                        placeholder="Почта родителей"
                        value={parentsEmail}
                        onChange={(e) => setParentsEmail(e.target.value)}
                        className={styles.field}
                    />
                    <button className={styles.submit}>
                        Далее
                    </button>
                </form>
            </React.Fragment>
        );
    case 1:
        return (
            <React.Fragment>
                <h1 className={styles.heading}>Регистрация</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="password"
                        aria-label="Пароль"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.password}
                    />
                    <strong className={styles.passwordCaption}>
                        *Обязательно запомни пароль
                    </strong>
                    <input 
                        type="password"
                        aria-label="Повтор пароля"
                        placeholder="Повтор пароля"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={styles.confirmPassword}
                    />
                    <GenderInput 
                        value={gender} 
                        onChange={(e) => setGender(e.target.value as Gender)}
                    />
                    <button className={styles.submit}>
                        Создать аккаунт
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

export default Child;