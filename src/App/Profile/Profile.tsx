import React from 'react';
import styles from './Profile.module.scss';
import Header from '@App/Profile/Header';
import Sidebar from '@App/Profile/Sidebar';

const Profile: React.FC = () => {
    console.log(styles);
    return (
      <div className={styles.Profile}>
        <Header />
        <Sidebar/>
      </div>
    );
};

export default Profile;
