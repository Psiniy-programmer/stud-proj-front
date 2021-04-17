import React from 'react';
import styles from "./ProgressBar.module.scss";

export interface ProgressBarProps {
  name: string,
  width: number
}

const ProgressBar = ({name, width}: ProgressBarProps) => {
  return (
    <div className={styles.bar}>
      <span className={styles.barLine}>
        <span style={{
          width: `${width}%`
        }} className={styles.barLineProgress}/>
      </span>
      <p className={styles.barText}>
        {width}%
      </p>
      <p>
        {name}
      </p>
    </div>
  )
}

export default ProgressBar;
