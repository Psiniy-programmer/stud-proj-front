import React from 'react';
import FormPageTemplate from '@components/form/FormPageTemplate';
import styles from './SignInPage.module.scss';

function SignInPage() {
    return (
        <FormPageTemplate>
            <h2 className={styles.heading}>Авторизация</h2>
            <form>
                <input aria-label="Логин" placeholder="Логин:" className={styles.login} />
                <input aria-label="Пароль" placeholder="Пароль:" className={styles.password} />
                <span className={styles.forgotPassword}>Забыли пароль?</span>
                <button className={styles.signInButton}>Войти</button>
                <button className={styles.signUpButton}>Создать аккаунт</button>
            </form>
        </FormPageTemplate>
    );
}

export default SignInPage;