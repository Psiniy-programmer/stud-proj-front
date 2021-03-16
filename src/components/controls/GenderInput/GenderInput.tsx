import React from 'react';
import styles from './GenderInput.module.scss';

export type Gender = 'male' | 'female';

interface GenderInputProps {
    value?: Gender;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

function GenderInput({ value, onChange, className }: GenderInputProps) {
    return (
        <fieldset className={`${styles.gender} ${className}`}>
            <legend className={styles.legend}>Пол</legend>
            <label className={styles.female}>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={value === 'female'}
                    className={styles.radio}
                    onChange={onChange}
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
                    onChange={onChange}
                />
                Муж.
            </label>
        </fieldset>
    );
}

export default GenderInput;