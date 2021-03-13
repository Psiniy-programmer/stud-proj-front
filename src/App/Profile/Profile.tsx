import React from 'react';
import styles from './Profile.module.scss';
import Header from '@App/Profile/Header';
import Sidebar from '@App/Profile/Sidebar';
import Schedule from '@App/Profile/Content/Schedule';

const Profile: React.FC = () => {

    return (
      <div className={styles.Profile}>
        <Header />
        <div className={styles.content}>
            <Sidebar/>
            <Schedule/>
        </div>
      </div>
    );
};

export default Profile;
