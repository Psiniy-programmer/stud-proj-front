import React, { useState } from 'react';
import styles from './FilePicker.module.scss';

interface FilePickerProps {
    label?: string;
    icon?: string;
    className?: string;
}

function FilePicker({ label, icon, className }: FilePickerProps) {
    const [filesCount, setFilesCount] = useState(0);
    const handleFilesChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFilesCount(e.target.files.length);
        }
    });
    let filesbarItems;
    if (filesCount > 0) {
        filesbarItems = [];
        for (let i = 0; i < filesCount; i++) {
            filesbarItems.push(<div className={styles.filesbarItem}></div>);
        }
    } else {
        filesbarItems = false;
    }
    return (
        <div className={`${styles.picker} ${className}`}>
            <label className={styles.label}>
                {label}
                {icon && <img src={icon} alt="Иконка" className={styles.icon}/>}
                <input type="file" className={styles.input} onChange={handleFilesChange} multiple />
            </label>
            <div className={styles.filesbar}>
                {filesbarItems}
            </div>
        </div>
    );
}

export default FilePicker;