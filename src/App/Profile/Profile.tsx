import React from 'react';
import styles from './Profile.module.scss';
import Header from '@App/Profile/Header';
import Adult from '@App/Profile/Sidebar/Adult';
import Schedule from '@App/Profile/Content/Adult/Schedule';

const Profile: React.FC = () => {

    return (
      <div className={styles.Profile}>
        <Header />
        <div className={styles.content}>
            <Adult/>
            <Schedule/>
        </div>
      </div>
    );
};

export default Profile;
