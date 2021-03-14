import React, { useState } from 'react';
import styles from './FullNameForm.module.scss';

export interface FullName {
    name: string;
    surname: string;
    patronymic: string;
}

interface FullNameFormProps {
    onSubmit: (fullName: FullName) => any;
}

function FullNameForm({onSubmit}: FullNameFormProps) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState(''); 
    
    return (
        <form onSubmit={() => onSubmit({name, surname, patronymic})}>
            <input 
                type="text"
                name="name" 
                aria-label="Имя" 
                placeholder="Имя" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className={styles.field}
            />
            <input 
                type="text"
                name="surname" 
                aria-label="Фамилия" 
                placeholder="Фамилия" 
                value={surname} 
                onChange={(e) => setSurname(e.target.value)}
                className={styles.field}
            />
            <input 
                type="text"
                name="patronymic" 
                aria-label="Отчество" 
                placeholder="Отчество" 
                value={patronymic} 
                onChange={(e) => setPatronymic(e.target.value)} 
                className={styles.field}
            />
            <button className={styles.submit}>Далее</button>
        </form>
    );
}

export default FullNameForm;