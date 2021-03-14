import React from 'react';
import styles from './Parent.module.scss';
import Kid from '@App/Profile/Sidebar/Parent/Kid';

type kid = {
    name: string,
    teacher: string,
    id: number
};

const kids: kid[] = [
    {
        name: 'Петя',
        teacher: 'Васяна Татьиновна',
        id: 1
    },
    {
        name: 'Петя',
        teacher: 'Васяна Татьиновна',
        id: 2
    },
    {
        name: 'Петя',
        teacher: 'Васяна Татьиновна',
        id: 3
    },
    {
        name: 'Петя',
        teacher: 'Васяна Татьиновна',
        id: 4
    }
];

const Parent: React.FC = () => {
    return (
        <div className={styles.Parent}>
            <p className={styles.kids__title}>Дети</p>
            <div className={styles.kids}>
                {
                    kids.map((kid, index) => {
                        if (index === kids.length - 1) {
                            return <Kid key={kid.id} last={true} kid={kid.name} teacher={kid.teacher} />;
                        } else {
                            return <Kid key={kid.id} last={false} kid={kid.name} teacher={kid.teacher} />;
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Parent;
