import React from 'react';
import './Header.module.scss';
import logo from './logo.png';

const Header: React.FC = () => {

    return (
    <header>
        <img src={logo} alt="ЛОГО"/>
        <nav>
            <p>Профиль</p>
            <p>Главная</p>
            <p>Выйти</p>
        </nav>
    </header>
    );
};

export default Header;
