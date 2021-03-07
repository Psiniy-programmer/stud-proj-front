import React from 'react';
import Input from '@components/form/controls/Input';
import Button from '@components/form/controls/Button';
import styles from './SignIn.module.scss';

function SignIn() {
    return (
        <React.Fragment>
            <h2 className={styles.heading}>Авторизация</h2>
            <form>
                <Input aria-label="Логин" placeholder="Логин:" className={styles.login} />
                <Input aria-label="Пароль" placeholder="Пароль:" className={styles.password} />
                <span className={styles.forgotPassword}>Забыли пароль?</span>
                <Button className={styles.primaryButton}>Войти</Button>
                <Button className={styles.secondaryButton}>Создать аккаунт</Button>
            </form>
        </React.Fragment>
    );
}

export default SignIn;