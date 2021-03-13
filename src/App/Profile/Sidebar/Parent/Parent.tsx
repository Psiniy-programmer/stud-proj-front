import React from 'react';
import styles from './Parent.module.scss';
import Kid from '@App/Profile/Sidebar/Parent/Kid';

type kid = {
    name: string,
    teacher: string
};

const kids: kid[] = [
    {
        name: 'Петя',
        teacher: 'Васяна Татьиновна'
    },
    {
        name: 'Петя',
        teacher: 'Васяна Татьиновна'
    },
    {
        name: 'Петя',
        teacher: 'Васяна Татьиновна'
    },
    {
        name: 'Петя',
        teacher: 'Васяна Татьиновна'
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
                            return <Kid key={kid.name} last={true} kid={kid.name} teacher={kid.teacher} />;
                        } else {
                            return <Kid key={kid.name} last={false} kid={kid.name} teacher={kid.teacher} />;
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Parent;
