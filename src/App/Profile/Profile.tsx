import React, { useEffect, useState } from 'react';
import styles from './Profile.module.scss';
import Header from '@App/Header';
import Adult from '@App/Profile/Sidebar/Adult';
import Schedule from '@App/Profile/Content/Adult/Schedule';
import Content from "@App/Profile/Content";
import Navigation from "@App/Profile/Content/Adult/Navigation";
import Messenger from "@App/Profile/Content/Adult/Messenger";

export enum profilePages {
  schedule,
  messenger
}

const Profile: React.FC = () => {
  const [curPage, setCurPage] = useState<profilePages>(profilePages.messenger);

  const getPage = () => {
    switch (curPage) {
      case profilePages.messenger:
        return <Messenger/>;
      case profilePages.schedule:
        return <Schedule/>;
      default:
        return 'none';
    }
  }

  return (
    <div className={styles.Profile}>
      <Header/>
      <Content>
        <Adult/>
        <div className={styles.inner}>
          <Navigation curPage={curPage} setNewPage={setCurPage}/>
          {getPage()}
        </div>
      </Content>
    </div>
  );
};

export default Profile;
