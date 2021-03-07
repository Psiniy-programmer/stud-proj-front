import React from 'react';
import styles from './FormPageTemplate.module.scss';

interface FormPageTemplateProps {
    children?: React.ReactNode;
}

function FormPageTemplate({ children }: FormPageTemplateProps) {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <img className={styles.logo} src="https://logoipsum.com/logo/logo-4.svg" />
                <span className={styles.wtf}>Главная</span>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <span>Нашли ошибку?</span>
            </footer>
        </div>
    );
}

export default FormPageTemplate;