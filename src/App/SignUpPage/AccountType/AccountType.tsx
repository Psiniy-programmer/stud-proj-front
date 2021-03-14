import React from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import headingIcon from './heading-icon.png';
import goBackIcon from './go-back-icon.svg';
import styles from './AccountType.module.scss';

function AccountType() {
    const { url } = useRouteMatch();
    const history = useHistory();

    return (
        <React.Fragment>
            <img src={headingIcon} alt="Иконка" className={styles.headingIcon} />
            <h1>Создать аккаунт как:</h1>
            <Link to={`${url}/parent`} className={styles.link}>
                <span className={styles.linkText}>Родитель</span>
            </Link>
            <Link to={`${url}/child`} className={styles.link}>
                <span className={styles.linkText}>Специалист</span>
            </Link>
            <Link to={`${url}/specialist`} className={styles.link}>
                <span className={styles.linkText}>Ребенок</span>
            </Link>
            <button onClick={() => history.goBack()} className={styles.goBack}>
                <img src={goBackIcon} alt="Иконка" className={styles.goBackIcon}/>
                <span>Вернуться назад</span>
            </button>
        </React.Fragment>
    );
}

export default AccountType;