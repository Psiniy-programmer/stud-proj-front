import React from 'react';
import styles from "./Navigation.module.scss";
import { profilePages } from "@App/Profile/Profile";

export interface NavigationProps {
  curPage: profilePages,
  setNewPage: React.Dispatch<React.SetStateAction<profilePages>>
}

const Navigation = ({curPage, setNewPage}: NavigationProps) => {

  const setSchedulePage = () => {
    if (setNewPage) {
      setNewPage(profilePages.schedule);
    }
  }

  const setMessengerPage = () => {
    if (setNewPage) {
      setNewPage(profilePages.messenger);
    }
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.navigationItems}>
        <span className={curPage === profilePages.schedule ? styles.active : ''} onClick={setSchedulePage}>Расписание</span>
        <span className={curPage === profilePages.messenger ? styles.active : ''} onClick={setMessengerPage}>Сообщения</span>
      </div>
    </div>
  )
}

export default Navigation;
