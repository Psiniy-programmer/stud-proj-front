import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FormPageTemplate.module.scss';

interface FormPageTemplateProps {
    children?: React.ReactNode;
}

function FormPageTemplate({ children }: FormPageTemplateProps) {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <img className={styles.logo} src="https://logoipsum.com/logo/logo-4.svg" />
                <Link to="/TODO" className={styles.link}>Главная</Link>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <Link to="/TODO">Нашли ошибку?</Link>
            </footer>
        </div>
    );
}

export default FormPageTemplate;