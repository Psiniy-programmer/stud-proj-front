import React, {useCallback, useEffect, useState} from 'react';
import moment from 'moment';
import leftArrow from './leftArrow.svg';
import rightArrow from './rightArrow.svg';
import styles from './Schedule.module.scss';
import Item from '@App/Profile/Content/Adult/Schedule/Item';
import Days from '@utils/days';

type dayType = {
    number: number,
    weekDay: string,
    info?: string,
    isActive: boolean
}

const Schedule: React.FC = () => {
    const [appData, setAppData] = useState(moment());
    const [activeDay, setActiveDay] = useState<number>(appData.date());
    const [calendar, setCalendar] = useState<dayType[]>([]);
    const nextMonth = useCallback(
        () => {
            setAppData((prev) => prev.clone().add(1, 'month'));
        },
        []
    );

    const prevMonth = useCallback(
        () => {
            setAppData((prev) => prev.clone().subtract(1, 'month'));
        },
        []
    );

    useEffect(() => {
        const startDay = appData.clone().startOf('month');
        const endDay = appData.clone().endOf('month');

        const day = startDay;
        const days: dayType[] = [];

        while (!day.isAfter(endDay)) {
            days.push(
                {
                    number: day.date() as number,
                    weekDay: Days.Days[day.weekday() - 1],
                    isActive: day.date() === activeDay,
                }
            );

            day.add(1, 'day');
        }

        setCalendar(days);
    }, [appData, activeDay]);

    const calendarRender = (): JSX.Element[] => {

        return calendar.map((day) => {
            return <Item
                setActiveDay={setActiveDay}
                isActive={day.isActive}
                key={day.number}
                weekDay={day.weekDay}
                day={day.number}
            />;
        });
    };

    return (
        <div className={styles.schedule}>
            <div className={styles.title}>
                <img onClick={prevMonth} src={leftArrow} alt="<"/>
                <h2>{Days.Months[appData.month()]}</h2>
                <img onClick={nextMonth} src={rightArrow} alt=">"/>
            </div>
            <div className={styles.calendar}>
                {calendarRender()}
            </div>
        </div>
    );
};

export default Schedule;
