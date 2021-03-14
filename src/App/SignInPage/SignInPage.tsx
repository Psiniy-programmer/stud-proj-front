import React, { useState } from 'react';
import FormPageTemplate from '@components/templates/FormPageTemplate';
import styles from './SignInPage.module.scss';
import { Link } from 'react-router-dom';

function SignInPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <FormPageTemplate>
            <h1 className={styles.heading}>Авторизация</h1>
            <form>
                <input 
                    type="email"
                    aria-label="Логин" 
                    placeholder="Логин:" 
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    className={styles.login} 
                />
                <input
                    type="password"
                    aria-label="Пароль" 
                    placeholder="Пароль:" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.password} 
                />
                <Link to="/TODO" className={styles.forgotPassword}>
                    Забыли пароль?
                </Link>
                <button className={styles.signInButton}>
                    Войти
                </button>
                <Link to="/signup" className={styles.signUpButton}>
                    Создать аккаунт
                </Link>
            </form>
        </FormPageTemplate>
    );
}

export default SignInPage;