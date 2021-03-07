import React from 'react';
import styles from './SignIn.module.scss';

function SignIn() {
    return (
        <React.Fragment>
            <h2 className={styles.heading}>Авторизация</h2>
            <form>
                <input aria-label="Логин" placeholder="Логин:" className={styles.login} />
                <input aria-label="Пароль" placeholder="Пароль:" className={styles.password} />
                <span className={styles.forgotPassword}>Забыли пароль?</span>
                <button className={styles.signInButton}>Войти</button>
                <button className={styles.signUpButton}>Создать аккаунт</button>
            </form>
        </React.Fragment>
    );
}

export default SignIn;