import React from 'react';
import styles from "./Messenger.module.scss";
import ChatItem from "@App/Profile/Content/Adult/Messenger/ChatItem";
import { ChatItemProps } from "@App/Profile/Content/Adult/Messenger/ChatItem/ChatItem";

const subjChats: ChatItemProps[] = [
  {
    name: 'Анжелика Павловна',
    lastMessage: 'Все хорошо, не волнуйтесь'
  },
  {
    name: 'Карина Леоновна',
    lastMessage: 'Вася все отлично делает, молодец!'
  },
  {
    name: 'Жанна Петровна',
    lastMessage: 'Мы можем созвониться и обо всем договориться'
  }
]

const otherChars: ChatItemProps[] = [
  {
    name: 'Чат Пети с Анжеликой',
    lastMessage: 'Отлично, ты молодец'
  },
  {
    name: 'Чат Васи с Кариной',
    lastMessage: 'Вася все отлично делает, молодец'
  }
]

const Messenger: React.FC = () => {
  return (
    <div className={styles.messenger}>
      <div className={styles.messengerSubj}>
        {
          subjChats.map((chat) => {
            return <ChatItem {...chat}/>
          })
        }
      </div>
      <div className={styles.messengerOther}>
        {
          otherChars.map((chat) => {
            return <ChatItem {...chat}/>
          })
        }
      </div>
    </div>
  )
};

export default Messenger;
