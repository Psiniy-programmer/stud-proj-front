import React from 'react';
import styles from './GenderInput.module.scss';

interface GenderInputProps {
    value?: 'male' | 'female';
    onChange?: React.FormEventHandler<HTMLFieldSetElement>;
}

function GenderInput({ value, onChange }: GenderInputProps) {
    return (
        <fieldset className={styles.gender} onChange={(onChange)}>
            <legend className={styles.legend}>Пол</legend>
            <label className={styles.female}>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={value === 'female'}
                    className={styles.radio}
                />
                Жен.
            </label>
            <label className={styles.male}>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={value === 'male'}
                    className={styles.radio}
                />
                Муж.
            </label>
        </fieldset>
    );
}

export default GenderInput;