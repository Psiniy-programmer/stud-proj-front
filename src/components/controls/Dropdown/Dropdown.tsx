import React from 'react';
import { useSelect } from 'downshift';
import SimpleBar from 'simplebar-react';
import styles from './Dropdown.module.scss';
import 'simplebar/src/simplebar.css';
import './simplebar.css';

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
        <div className={`${styles.dropdown} ${className}`} aria-label={ariaLabel}>
            <button
                className={styles.selectButton}
                type='button'
                {...getToggleButtonProps()}
            >
                {value || placeholder}
            </button>
            {isOpen && (
                <SimpleBar className={styles.scrollbar}>
                    <ul {...getMenuProps()} className={styles.menu}>
                        {items.map((item, index) => (
                            <li
                                className={
                                    value === item
                                        ? styles.highlightedItem
                                        : styles.item
                                }
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
