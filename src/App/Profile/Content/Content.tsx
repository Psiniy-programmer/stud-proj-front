import React, { ReactElement } from 'react';
import styles from './Content.module.scss';

const Content: React.FC = ({ children }) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
};

export default Content;
