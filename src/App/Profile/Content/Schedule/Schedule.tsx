import React, {useEffect, useState} from 'react';
import moment from 'moment';
import leftArrow from './leftArrow.svg';
import rightArrow from './rightArrow.svg';
import styles from './Schedule.module.scss';
import Item from '@App/Profile/Content/Schedule/Item';

type dayType = {
    number: number,
    info?: string,
    isActive: boolean
}

const Schedule: React.FC = () => {
    const [calendar, setCalendar] = useState<dayType[]>([]);

    useEffect(() => {
        const startDay = moment().startOf('month');
        const endDay = moment().endOf('month');
        const curDay = moment().date();
        const day = startDay.clone();
        const days: dayType[] = [];

        while (!day.isAfter(endDay)) {
            days.push(
                {
                    number: day.date() as number,
                    isActive: day.date() === curDay,
                }
            );

            day.add(1,'day');
        }

        setCalendar(days);

    }, []);
    
    const calendarRender  = (): JSX.Element[] => {

        return calendar.map((day) => {
            return <Item key={day.number} day={day.number}/>;
        });
    };

    return (
        <div className={styles.schedule}>
            <div className={styles.title}>
                <img src={leftArrow} alt="<"/>
                <h2>Month</h2>
                <img src={rightArrow} alt=">"/>
            </div>
            <div className={styles.calendar}>
                {calendarRender()}
            </div>
        </div>
    );
};

export default Schedule;
