import React from 'react';
import styles from './Parent.module.scss';
import Kid from '@App/Profile/Sidebar/Parent/Kid';

const Parent: React.FC = () => {
    return (
        <div className={styles.Parent}>
            <p className={styles.kids}>Дети</p>
            <Kid kid={'Петя'} teacher={'Васяна Татьиновна'}/>
        </div>
    );
};

export default Parent;
