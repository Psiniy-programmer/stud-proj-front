import React from 'react';
import styles from './Profile.module.scss';
import Header from '@App/Profile/Header';

const Profile: React.FC = () => {
    console.log(styles);
    return (
      <div className={styles.Profile}>
        <Header />
      </div>
    );
};

export default Profile;
