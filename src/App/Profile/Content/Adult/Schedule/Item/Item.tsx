import React from 'react';
import styles from './Item.module.scss';

interface ItemProps {
    day: number,
    info?: string,
    weekDay: string,
    isActive: boolean
}

const Item = ({day, weekDay, isActive}: ItemProps) => {
    return (
        <div className={`${styles.item} ${isActive ? styles.active : ''}`}>
            <p>{day}</p>
            <p>{weekDay}</p>
        </div>
    );
};

export default Item;
