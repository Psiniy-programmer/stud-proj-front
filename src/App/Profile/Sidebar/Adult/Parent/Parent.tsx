import React from 'react';
import styles from './Parent.module.scss';
import Kid from '@App/Profile/Sidebar/Adult/Kid';
import Progress from '@App/Profile/Sidebar/Adult/Parent/Progress';

export type kid = {
  name: string,
  teacher: string,
  id: number,
  progress: number
};

const kids: kid[] = [
  {
    name: 'Петя',
    teacher: 'Васяна Татьиновна',
    id: 1,
    progress: 30
  },
  {
    name: 'Дима',
    teacher: 'Васяна Татьиновна',
    id: 2,
    progress: 50
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
              return <Kid key={kid.id} last={true} kid={kid.name} teacher={kid.teacher}/>;
            } else {
              return <Kid key={kid.id} last={false} kid={kid.name} teacher={kid.teacher}/>;
            }
          })
        }
      </div>
      <Progress kids={kids}/>
    </div>
  );
};

export default Parent;
