import React from 'react';
import styles from './Progress.module.scss';
import ProgressBar from "@App/Profile/Sidebar/Adult/Parent/Progress/ProgressBar";
import { kid } from "@App/Profile/Sidebar/Adult/Parent/Parent";


export interface ProgressProps {
  kids: kid[]
}

const Progress = ({kids}: ProgressProps) => {
    return (
      <div className={styles.Progress}>
        <p className={styles.ProgressTitle}>
          Прогресс
        </p>
        <div className={styles.ProgressBars}>
          {
            kids.map((item) => {
              return <ProgressBar name={item.name} width={item.progress}/>
            })
          }
        </div>
      </div>
    )
};

export default Progress;
