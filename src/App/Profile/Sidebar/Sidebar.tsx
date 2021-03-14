import React from 'react';
import styles from './Sidebar.module.scss';
import placeholder from './test.jpg';
import edit from './edit.svg';
import Parent from '@App/Profile/Sidebar/Parent';

const Sidebar: React.FC = () => {

    return (
    <div className={styles.Sidebar}>
        <h2>Василий Резнов</h2>
        <img className={styles.avatar} src={placeholder} alt="avatar"/>
        <div className={styles.edit}>
            <p>Редактировать</p>
            <img className={styles.edit__img} src={edit} alt="edit"/>
        </div>
        <Parent/>
    </div>
    );
};

export default Sidebar;
