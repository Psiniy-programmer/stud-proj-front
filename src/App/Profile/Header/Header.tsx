import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    console.log(styles);
    return (
    <header>
        <img src="" alt="ЛОГО"/>
        <nav>
            <p>Профиль</p>
            <p>Главная</p>
            <p>Выйти</p>
        </nav>
    </header>
    );
};

export default Header;
