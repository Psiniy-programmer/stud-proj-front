import React, { useState } from 'react';
import TextArea from '@components/controls/TextArea';
import Dropdown from '@components/controls/Dropdown';
import FilePicker from '@components/controls/FilePicker';
import styles from './SpecializationForm.module.scss';
import camIcon from './cam-icon.svg';

interface SpecializationFormProps {
    onSubmit: (data: object) => any;
}

function SpecializationForm(props: SpecializationFormProps) {
    const [aboutMe, setAboutMe] = useState('');
    const [specialization, setSpecialization] = useState('');

    props.onSubmit({});
    return (
        <form>
            <TextArea 
                value={aboutMe} 
                onChange={(e) => setAboutMe(e.target.value)} 
                placeholder="О себе"
                ariaLabel="О себе"
                maxChars={100} 
                className={styles.aboutMe}
            />
            <Dropdown 
                items={['Какая то хуита', 'И еще', 'Давай давай, ура']}
                value={specialization}
                onChange={setSpecialization}
                placeholder="Специализация"
                ariaLabel="Специализация"
                className={styles.specialization}
            />
            <FilePicker 
                label="Загрузить документы или сертификаты"
                icon={camIcon}
            />
            <button className={styles.submit}>
                Создать аккаунт
            </button>
        </form>
    );
}

export default SpecializationForm;