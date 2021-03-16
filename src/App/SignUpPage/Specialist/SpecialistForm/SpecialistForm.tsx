import React, { useRef, useState } from 'react';
import TextArea from '@components/controls/TextArea';
import Dropdown from '@components/controls/Dropdown';
import FilePicker from '@components/controls/FilePicker';
import styles from './SpecialistForm.module.scss';
import camIcon from './cam-icon.svg';

export interface Specialist {
    about: string;
    specialization: string;
    documents: FileList | null;
}

interface SpecialistFormProps {
    onSubmit: (info: Specialist) => any;
}

const specializations = [
    'Общее недоразвитие речи',
    'Задержка развития речи',
    'Задержка психологического развития',
    'Фонетико-фонематическое недоразвитие речи',
    'Логоневроз (заикание)',
    'Дислалия',
    'Дизартрия',
    'Алалия',
    'Дислексия',
    'Дисграфия'
];

function SpecialistForm({ onSubmit }: SpecialistFormProps) {
    const [about, setAbout] = useState('');
    const [specialization, setSpecialization] = useState('');
    const documentsInput = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const documents = documentsInput.current && documentsInput.current.files;
        onSubmit({ about, specialization, documents });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextArea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="О себе"
                ariaLabel="О себе"
                maxChars={100}
                className={styles.about}
            />
            <Dropdown
                items={specializations}
                value={specialization}
                onChange={setSpecialization}
                placeholder="Специализация"
                ariaLabel="Специализация"
                className={styles.specialization}
            />
            <FilePicker
                label="Загрузить документы или сертификаты"
                icon={camIcon}
                ref={documentsInput}
            />
            <button className={styles.submit}>
                Создать аккаунт
            </button>
        </form>
    );
}

export default SpecialistForm;