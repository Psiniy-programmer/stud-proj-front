import React from 'react';
import styles from "./ChatItem.module.scss";
import test from "./test.jpg";

export interface ChatItemProps {
  name: string,
  lastMessage: string
}

const ChatItem = ({name , lastMessage}: ChatItemProps) => {
  return (
    <div className={styles.item}>
      <img className={styles.itemImg} src={test} alt="аватар"/>
      <div className={styles.itemText}>
        <p className={styles.itemTextName}>{name}</p>
        <p className={styles.itemTextLast}>{lastMessage}</p>
      </div>
    </div>
  )
};

export default ChatItem;
