import React from 'react';
import styles from './GenderInput.module.scss';

function GenderInput() {
    return (
        <fieldset className={styles.gender}>
            <legend className={styles.legend}>Пол</legend>
            <label className={styles.woman}>
                <input type="checkbox" className={styles.check} />
                Жен.
            </label>
            <label className={styles.man}>
                <input type="checkbox" className={styles.check} />
                Муж.
            </label>
        </fieldset>
    );
}

export default GenderInput;