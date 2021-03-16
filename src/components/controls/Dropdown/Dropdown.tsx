import React from 'react';
import { useSelect } from 'downshift';
import SimpleBar from 'simplebar-react';
import styles from './Dropdown.module.scss';
import 'simplebar/src/simplebar.css';
import './simplebar.css';
import downArrow from './down-arrow.svg';

interface DropdownProps {
    items: string[];
    value?: string;
    onChange?: (value: string) => any;
    placeholder?: string;
    ariaLabel?: string;
    className?: string;
}

function Dropdown({ 
    items, 
    value, 
    onChange, 
    placeholder, 
    ariaLabel, 
    className 
}: DropdownProps) {
    const {
        isOpen,
        getToggleButtonProps,
        getMenuProps,
        getItemProps,
    } = useSelect({ 
        items: items, 
        onSelectedItemChange: onChange && (c => onChange(c.selectedItem as string))
    });

    return (
        <div className={`${styles.dropdown} ${className}`}>
            <button
                type='button'
                aria-label={ariaLabel}
                className={styles.selectButton}
                {...getToggleButtonProps()}
            >
                <span>{value || placeholder}</span>
                <img src={downArrow} className={styles.selectButtonIcon} />
            </button>
            {isOpen && (
                <SimpleBar className={styles.scrollbar}>
                    <ul {...getMenuProps()} className={styles.menu}>
                        {items.map((item, index) => (
                            <li
                                className={styles.item}
                                key={`${item}${index}`}
                                {...getItemProps({ item, index })}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </SimpleBar>
            )}
        </div>
    );
}

export default Dropdown;
