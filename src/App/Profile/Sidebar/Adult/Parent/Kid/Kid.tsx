import React from 'react';
import styles from './Kid.module.scss';

export interface KidProps {
    kid: string,
    teacher: string,
    last?: boolean
}

const Kid = ({kid, teacher, last} : KidProps) => {
    return (
        <div className={styles.Kid}>
            <p className={styles.kidName}>{kid}</p>
            <div className={styles.teacherInfo}>
                <p className={styles.teacher}>Учитель:</p>
                <p className={styles.teacherName}>{teacher}</p>
            </div>
          {last ? <div className={styles.plus}>+</div> : ''}
        </div>
    );
};

export default Kid;
