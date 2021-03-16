import React, { useState } from 'react';
import styles from './FilePicker.module.scss';

interface FilePickerProps {
    label?: string;
    icon?: string;
    ref?: React.LegacyRef<HTMLInputElement>;
    className?: string;
}

function FilePicker({ label, icon, ref, className }: FilePickerProps) {
    const [filesCount, setFilesCount] = useState(0);

    const handleFilesChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFilesCount(e.target.files.length);
        }
    });

    return (
        <div className={`${styles.picker} ${className}`}>
            <label className={styles.label}>
                {label}
                {icon && <img src={icon} alt="Иконка" className={styles.icon} />}
                <input
                    type="file"
                    ref={ref}
                    onChange={handleFilesChange}
                    multiple
                    className={styles.input}
                />
            </label>
            <div className={styles.filesbar}>
                {filesCount > 0 && new Array(filesCount).fill(
                    <div className={styles.filesbarItem} />
                )}
            </div>
        </div>
    );
}

export default FilePicker;