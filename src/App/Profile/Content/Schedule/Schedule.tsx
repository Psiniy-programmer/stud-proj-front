import React from 'react';
import leftArrow from './leftArrow.svg';
import rightArrow from './rightArrow.svg';
import styles from './Schedule.module.scss';

const Schedule: React.FC = () => {
    return (
        <div className={styles.schedule}>
            <div className={styles.title}>
                <img src={leftArrow} alt="<"/>
                <h2>Month</h2>
                <img src={rightArrow} alt=">"/>
            </div>
            <div className={styles.calendar}>
                calendar
            </div>
        </div>
    );
};

export default Schedule;
