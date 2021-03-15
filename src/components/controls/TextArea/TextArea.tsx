import React, { useEffect, useRef} from 'react';
import styles from './TextArea.module.scss';

interface TextAreaProps {
    value?: string
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    ariaLabel?: string;
    maxChars?: number;
    className?: string;
}

function TextArea({value, onChange, placeholder, ariaLabel, maxChars, className}: TextAreaProps) {
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const elem = ref.current as HTMLTextAreaElement;
        elem.style.height = '0';
        elem.style.height = `${elem.scrollHeight}px`;
    }, [value]);

    return (
        <div className={`${styles.area} ${className}`}>
            <textarea 
                ref={ref} 
                value={value}
                placeholder={placeholder}
                aria-label={ariaLabel}
                maxLength={maxChars}
                onChange={onChange} 
                className={styles.text}
            />
            {value && maxChars !== undefined && value.length / maxChars >= .5 && (
                <div className={styles.charCount}>
                    {`${value.length}/${maxChars}`}
                </div>
            )}
        </div>
    );
}

export default TextArea;