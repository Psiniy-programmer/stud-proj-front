import React from 'react';
import styles from './Item.module.scss';

interface ItemProps {
    day: number,
    info?: string,
    weekDay: string,
    isActive: boolean,
    setActiveDay:  React.Dispatch<React.SetStateAction<number>>
}

const Item = ({ day, weekDay, isActive, setActiveDay}: ItemProps) => {
    return (
        <div
          onClick={() => setActiveDay(day)}
          className={`${styles.item} ${isActive ? styles.active : ''}`}>
            <p>{day}</p>
            <p>{weekDay}</p>
        </div>
    );
};

export default Item;
